import { ServidorStoreSchema, ServidorUpdateSchema } from './../../Validators/ServidorValidator'
import Servidor from 'App/Models/Servidor'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ServidoresController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    // Flujo controlador
    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const servidores = await Servidor.filter(filters)
        .preload('tipo_servidor')
        .preload('rack', (q) => q.preload('sala'))
        .preload('sistema_operativo')
        .preload('base_datos')
        .withCount('sistemas')
        .withCount('instancias')
        .paginate(page, limit)

      const data = servidores.serialize({
        fields: {
          pick: ['id', 'nombre', 'disco', 'memoria'],
        },
        relations: {
          tipoServidor: {
            fields: ['id', 'nombre'],
          },
          rack: {
            fields: ['id', 'nombre'],
            relations: {
              sala: {
                fields: ['id', 'nombre'],
              },
            },
          },
          sistemaOperativo: {
            fields: ['id', 'nombre'],
          },
          baseDatos: {
            fields: ['id', 'nombre'],
          },
        },
      })

      return response.ok({
        status: true,
        message: 'Servidores listados correctamente',
        servidores: data.data,
        meta: data.meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar servidores',
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
      const servidor = await Servidor.findOrFail(params.id)
      const isAllowed = await bouncer.with('ServidoresPolicy').allows('view', servidor)

      await servidor.load('tipo_servidor')

      if ([2, 3].includes(servidor?.tipo_servidor?.id)) {
        await servidor.load('base_datos')
      }

      await servidor.load('sistema_operativo')
      await servidor.load('rack', (r) =>
        r.preload('sala', (s) => s.preload('region', (r) => r.preload('pais')))
      )

      const data = servidor.serialize({
        fields: {
          omit: !isAllowed ? ['usuario_ingreso', 'contrasena_ingreso'] : undefined,
        },
      })

      return response.ok({
        status: true,
        message: 'Servidor encontrado correctamente',
        servidor: data,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener servidor',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const { servidor: data } = await request.validate({ schema: ServidorStoreSchema })

    const servidor = new Servidor()

    servidor.nombre = data.nombre
    servidor.ip = data.ip
    servidor.usuarioIngreso = data.usuarioIngreso
    servidor.contrasenaIngreso = data.contrasenaIngreso
    servidor.disco = data.disco
    servidor.memoria = data.memoria
    servidor.poseeGarantia = data.poseeGarantia
    servidor.nombreContactoMantencion = data.nombreContactoMantencion
    servidor.telefonoContactoMantencion = data.telefonoContactoMantencion
    servidor.emailContactoMantencion = data.emailContactoMantencion
    servidor.idRack = data.idRack
    servidor.idTipoServidor = data.idTipoServidor
    servidor.idSistemaOperativo = data.idSistemaOperativo
    servidor.idBaseDatos = data.idBaseDatos

    try {
      await servidor.save()

      return response.created({
        status: true,
        message: 'Servidor creado correctamente',
        servidor: servidor.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear servidor',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])
    const { servidor: data } = await request.validate({ schema: ServidorUpdateSchema })

    const servidor = await Servidor.findOrFail(params?.id)

    servidor.nombre = data.nombre ?? servidor.nombre
    servidor.ip = data.ip ?? servidor?.ip
    servidor.usuarioIngreso = data.usuarioIngreso ?? servidor.usuarioIngreso
    servidor.contrasenaIngreso = data.contrasenaIngreso ?? servidor.contrasenaIngreso
    servidor.disco = data.disco ?? servidor.disco
    servidor.memoria = data.memoria ?? servidor.memoria
    servidor.poseeGarantia = data.poseeGarantia ?? servidor.poseeGarantia
    servidor.nombreContactoMantencion =
      data.nombreContactoMantencion === null ? undefined : data.nombreContactoMantencion
    servidor.telefonoContactoMantencion =
      data.telefonoContactoMantencion === null ? undefined : data.telefonoContactoMantencion
    servidor.emailContactoMantencion =
      data.emailContactoMantencion === null ? undefined : data.emailContactoMantencion
    servidor.idRack = data.idRack ?? servidor.idRack
    servidor.idTipoServidor = data.idTipoServidor ?? servidor.idTipoServidor
    servidor.idSistemaOperativo = data.idSistemaOperativo ?? servidor.idSistemaOperativo
    servidor.idBaseDatos = data.idBaseDatos === null ? undefined : data.idBaseDatos

    try {
      await servidor.save()

      return response.ok({
        status: true,
        message: 'Servidor actualizado correctamente',
        servidor: servidor.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar servidor',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])
    const servidor = await Servidor.findOrFail(params.id)

    try {
      await servidor.delete()

      return response.ok({
        status: true,
        message: 'Servidor eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar servidor',
        error,
      })
    }
  }
}
