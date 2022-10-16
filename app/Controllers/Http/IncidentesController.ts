import { IncidenteUpdateSchema } from './../../Validators/IncidenteValidator'
import Incidente from 'App/Models/Incidente'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { IncidenteStoreSchema } from 'App/Validators/IncidenteValidator'
import Database from '@ioc:Adonis/Lucid/Database'
import { DateTime } from 'luxon'
import InstanciaSistema from 'App/Models/InstanciaSistema'
import Sistema from 'App/Models/Sistema'
import Usuario from 'App/Models/Usuario'
import TipoProblema from 'App/Models/TipoProblema'
import TipoInstancia from 'App/Models/TipoInstancia'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class IncidentesController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor', 'Informante'])

    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const incidentes = await Incidente.filter(filters)
        .preload('estado_incidente')
        .preload('instancia_sistema', (q) => q.preload('sistema'))
        .orderBy('id', 'desc')
        .paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Incidentes listados correctamente',
        incidentes: incidentes.serialize().data,
        meta: incidentes.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar incidentes',
        error,
      })
    }
  }

  public async show({ params, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor', 'Informante'])

    try {
      const incidente = await Incidente.findOrFail(params.id)
      const isAllowed = await bouncer
        .with('IncidentesPolicy')
        .allows('isAllowedToChange', incidente)

      await incidente.load('equipo_trabajo')
      await incidente.load('estado_incidente')
      await incidente.load('tipo_problema')
      await incidente.load('tipo_solucion')
      await incidente.load('instancia_sistema', (i) => {
        i.preload('estado_instancia')
          .preload('tipo_instancia')
          .preload('sistema', (s) => s.preload('usuario'))
          .preload('servidor')
      })

      const data = incidente.serialize({
        relations: {
          servidor: {
            fields: {
              omit: isAllowed ? undefined : ['usuarioIngreso', 'contrasenaIngreso'],
            },
          },
        },
      })

      return response.ok({
        status: true,
        message: 'Incidente encontrado correctamente',
        incidente: data,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener incidente',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor', 'Informante'])

    const { incidente: data } = await request.validate({ schema: IncidenteStoreSchema })

    const incidente = new Incidente()

    incidente.detalleProblema = data.detalleProblema
    incidente.idTipoProblema = data.idTipoProblema
    incidente.idSistema = data.idSistema
    incidente.idEstadoIncidente = 1

    const instancia = await InstanciaSistema.findOrFail(data.idSistema)
    instancia.idEstadoInstancia = 1

    await Database.rawQuery(`ALTER SESSION SET NLS_TIMESTAMP_FORMAT='YYYY-MM-DD HH24:MI:SS'`)

    try {
      await incidente.save()
      await instancia.save()

      const sistema = await Sistema.findOrFail(data.idSistema)
      const usuario = await Usuario.findOrFail(sistema.idUsuario)
      const tipoProblema = await TipoProblema.findOrFail(data.idTipoProblema)
      const tipoInstancia = await TipoInstancia.findOrFail(instancia.idTipoInstancia)

      await Mail.send((message) => {
        message
          .from('no-reply@servercraft.cl')
          .to(usuario.email)
          .subject('Nuevo incidente en sistema a tu cargo')
          .htmlView('emails/incidente', {
            name: `${usuario.nombre} ${usuario.apellidos}`,
            sistema: `${sistema.nombre}`,
            instancia: `${sistema.nombre} - ${tipoInstancia.nombre}`,
            tipoProblema: `${tipoProblema.nombre}`,
            detalleProblema: `${incidente.detalleProblema}`,
          })
      })

      return response.ok({
        status: true,
        message: 'Incidente creado correctamente',
        incidente: incidente.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear incidente',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { incidente: data } = await request.validate({ schema: IncidenteUpdateSchema })

    const incidente = await Incidente.findOrFail(params.id)

    bouncer.with('IncidentesPolicy').authorize('isAllowedToChange', incidente)

    incidente.detalleProblema = data.detalleProblema ?? incidente.detalleProblema
    incidente.detalleSolucion = data.detalleSolucion ?? incidente.detalleSolucion
    incidente.idTipoProblema = data.idTipoProblema ?? incidente.idTipoProblema
    incidente.idTipoSolucion = data.idTipoSolucion ?? incidente.idTipoSolucion
    incidente.idEquipoSolucion = data.idEquipoSolucion ?? incidente.idEquipoSolucion
    incidente.idSistema = data.idSistema ?? incidente.idSistema

    if (incidente.idEstadoIncidente !== 3 && data.idEstadoIncidente === 3) {
      await Database.rawQuery(`ALTER SESSION SET NLS_TIMESTAMP_FORMAT='YYYY-MM-DD HH24:MI:SS'`)
      incidente.fechaHoraSolucion = DateTime.local()
    }

    incidente.idEstadoIncidente = data.idEstadoIncidente ?? incidente.idEstadoIncidente

    try {
      await incidente.save()

      if (data.idEstadoIncidente === 1) {
        const instancia = await InstanciaSistema.findOrFail(incidente?.idSistema)
        instancia.idEstadoInstancia = 1

        await instancia.save()
      }

      if (data.idEstadoIncidente === 2) {
        const instancia = await InstanciaSistema.findOrFail(incidente?.idSistema)
        instancia.idEstadoInstancia = 2

        await instancia.save()
      }

      if (data.idEstadoIncidente === 3) {
        const instancia = await InstanciaSistema.findOrFail(incidente?.idSistema)
        instancia.idEstadoInstancia = 3

        await instancia.save()
      }

      return response.ok({
        status: true,
        message: 'Incidente actualizado correctamente',
        incidente: incidente.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar incidente',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const incidente = await Incidente.findOrFail(params.id)

    bouncer.with('IncidentesPolicy').authorize('isAllowedToChange', incidente)

    const instancia = await InstanciaSistema.findOrFail(incidente?.idSistema)
    instancia.idEstadoInstancia = 3

    try {
      await incidente.delete()
      await instancia.save()

      return response.ok({
        status: true,
        message: 'Incidente eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar incidente',
        error,
      })
    }
  }
}
