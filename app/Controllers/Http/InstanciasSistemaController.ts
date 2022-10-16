import {
  InstanciaSistemaStoreSchema,
  InstanciaSistemaUpdateSchema,
} from './../../Validators/InstanciaValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import InstanciaSistema from 'App/Models/InstanciaSistema'

export default class InstanciasSistemaController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor', 'Informante'])

    // Flujo controlador
    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const instancias = await InstanciaSistema.filter(filters)
        .preload('estado_instancia')
        .preload('tipo_instancia')
        .preload('sistema')
        .preload('servidor')
        .paginate(page, limit)

      const data = instancias.serialize({
        relations: {
          servidor: {
            fields: ['id', 'nombre', 'ip'],
          },
        },
      })

      return response.ok({
        status: true,
        message: 'Instancias listadas correctamente',
        instancias: data.data,
        meta: data.meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar instancias',
        error,
      })
    }
  }

  public async show({ params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    // Flujo controlador
    try {
      const instancia = await InstanciaSistema.findOrFail(params.id)
      const isAllowed = await bouncer
        .with('InstanciasPolicy')
        .allows('isAllowedToChange', instancia)

      await instancia.load('estado_instancia')
      await instancia.load('tipo_instancia')
      await instancia.load('sistema', (s) => s.preload('usuario').as('encargado'))
      await instancia.load('servidor', (s) => {
        s.preload('sistema_operativo')
          .preload('base_datos')
          .preload('tipo_servidor')
          .preload('rack', (r) => {
            r.preload('sala', (s) => {
              s.preload('region', (r) => {
                r.preload('pais')
              })
            })
          })
      })

      const data = instancia.serialize({
        relations: {
          servidor: {
            fields: [
              'id',
              'nombre',
              'ip',
              'disco',
              'memoria',
              ...(isAllowed ? ['usuarioIngreso', 'contrasenaIngreso'] : []),
            ],
          },
        },
      })

      return response.ok({
        status: true,
        message: 'Instancia encontrada correctamente',
        instancia: data,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener instancia',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    // Flujo controlador
    const { instancia: data } = await request.validate({ schema: InstanciaSistemaStoreSchema })

    const instancia = new InstanciaSistema()

    instancia.idEstadoInstancia = data.idEstadoInstancia
    instancia.idServidor = data.idServidor
    instancia.idSistema = data.idSistema
    instancia.idTipoInstancia = data.idTipoInstancia

    await bouncer.with('InstanciasPolicy').authorize('isAllowedToChange', instancia)

    try {
      await instancia.save()

      return response.created({
        status: true,
        message: 'Instancia creada correctamente',
        instancia: instancia.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear instancia',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    // Flujo controlador
    const { instancia: data } = await request.validate({ schema: InstanciaSistemaUpdateSchema })

    const instancia = await InstanciaSistema.findOrFail(params?.id)

    await bouncer.with('InstanciasPolicy').authorize('isAllowedToChange', instancia)

    instancia.idEstadoInstancia = data.idEstadoInstancia ?? instancia.idEstadoInstancia
    instancia.idServidor = data.idServidor ?? instancia.idServidor
    instancia.idSistema = data.idSistema ?? instancia.idSistema
    instancia.idTipoInstancia = data.idTipoInstancia ?? instancia.idTipoInstancia

    try {
      await instancia.save()

      return response.ok({
        status: true,
        message: 'Instancia actualizado correctamente',
        instancia: instancia.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar instancia',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    // Flujo controlador
    const instancia = await InstanciaSistema.findOrFail(params.id)

    await bouncer.with('InstanciasPolicy').authorize('isAllowedToChange', instancia)

    try {
      await instancia.delete()

      return response.ok({
        status: true,
        message: 'Instancia eliminada correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar instancia',
        error,
      })
    }
  }
}
