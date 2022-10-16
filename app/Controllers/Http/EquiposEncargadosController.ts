import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EquipoEncargado from 'App/Models/EquipoEncargado'
import {
  EquipoEncargadoStoreValidator,
  EquipoEncargadoUpdateValidator,
} from './../../Validators/EquipoEncargadoValidator'

export default class EquiposEncargadosController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const equipo = await EquipoEncargado.filter(filters)
        .preload('proveedor_sistema')
        .paginate(page, limit)

      const data = equipo.serialize({
        fields: {
          pick: ['id', 'nombre'],
        },
        relations: {
          proveedorSistema: {
            fields: ['id', 'nombre'],
          },
        },
      })

      return response.ok({
        status: true,
        message: 'Equipos listados correctamente',
        equipos_encargados: data.data,
        meta: data.meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar equipos',
        error,
      })
    }
  }

  public async show({ params, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    try {
      const equipo = await EquipoEncargado.findOrFail(params.id)

      await equipo.load('proveedor_sistema')

      return response.ok({
        status: true,
        message: 'Equipo encargado obtenido correctamente',
        equipo_encargado: equipo.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener equipo encargado',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { equipoEncargado: data } = await request.validate({
      schema: EquipoEncargadoStoreValidator,
    })

    const equipo = new EquipoEncargado()

    equipo.nombre = data.nombre
    equipo.telefonoContacto = data.telefonoContacto
    equipo.nombreRepresentante = data.nombreRepresentante
    equipo.emailContacto = data.emailContacto
    equipo.idProveedorSistema = data.idProveedorSistema

    try {
      await equipo.save()
      await equipo.load('proveedor_sistema')

      return response.created({
        status: true,
        message: 'Equipo creado correctamente',
        equipo: equipo.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear equipo encargado',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { equipoEncargado: data } = await request.validate({
      schema: EquipoEncargadoUpdateValidator,
    })

    const equipo = await EquipoEncargado.findOrFail(params?.id)

    equipo.nombre = data.nombre ?? equipo.nombre
    equipo.telefonoContacto = data.telefonoContacto ?? equipo.telefonoContacto
    equipo.nombreRepresentante = data.nombreRepresentante ?? equipo.nombreRepresentante
    equipo.emailContacto = data.emailContacto ?? equipo.emailContacto
    equipo.idProveedorSistema = data.idProveedorSistema ?? equipo.idProveedorSistema

    try {
      await equipo.save()
      await equipo.load('proveedor_sistema')

      return response.ok({
        status: true,
        message: 'Equipo actualizado correctamente',
        equipo: equipo.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar equipo',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const equipo = await EquipoEncargado.findOrFail(params.id)

    try {
      await equipo.delete()

      return response.ok({
        status: true,
        message: 'Equipo eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar equipo',
        error,
      })
    }
  }
}
