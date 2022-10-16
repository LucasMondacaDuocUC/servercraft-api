import { SistemaStoreValidator, SistemaUpdateValidator } from './../../Validators/SistemaValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sistema from 'App/Models/Sistema'
import Database from '@ioc:Adonis/Lucid/Database'
import DocumentoSistema from 'App/Models/DocumentoSistema'
import InstanciaSistema from 'App/Models/InstanciaSistema'

export default class SistemasController {
  public async index({ response, bouncer, request }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor', 'Informante'])

    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const sistema = await Sistema.filter(filters)
        .preload('equipo_proveedor', (q) => q.preload('proveedor_sistema'))
        .preload('usuario')
        .preload('instancias', (q) => q.preload('estado_instancia').withCount('incidentes'))
        .paginate(page, limit)

      const data = sistema.serialize({
        fields: {
          pick: ['id', 'nombre'],
        },
        relations: {
          equipoProveedor: {
            fields: ['id', 'nombre'],
            relations: {
              proveedorSistema: {
                fields: ['id', 'nombre'],
              },
            },
          },
          instancias: {
            fields: ['id', 'nombre'],
            relations: {
              estado_instancia: {
                fields: ['id', 'nombre'],
              },
            },
          },
        },
      })

      return response.ok({
        status: true,
        message: 'Sistemas listados correctamente',
        sistema: data.data,
        meta: data.meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar Sistema',
        error,
      })
    }
  }

  public async show({ params, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    try {
      const sistema = await Sistema.findOrFail(params.id)

      const isAllowed = await bouncer.with('SistemaPolicy').allows('view', sistema)

      await sistema.load('equipo_proveedor', (s) => s.preload('proveedor_sistema'))
      await sistema.load('instancias', (s) => {
        s.preload('tipo_instancia')
          .preload('estado_instancia')
          .preload('servidor', (s) => s.preload('tipo_servidor'))
      })
      await sistema.load('servidor_db', (s) => {
        s.preload('sistema_operativo').preload('base_datos').preload('tipo_servidor')
      })
      await sistema.load('documentos')
      await sistema.load('nivel_seguridad')
      await sistema.load('nivel_sensibilidad')
      await sistema.load('lenguajes')
      await sistema.load('servicios_web', (s) => s.preload('documentos'))
      await sistema.load('usuario')

      const data = sistema.serialize({
        relations: {
          servidorDB: {
            fields: [
              'id',
              'nombre',
              'memoria',
              ...(isAllowed ? ['usuarioIngreso', 'contrasenaIngreso'] : []),
            ],
          },
          instancias: {
            relations: {
              servidor: {
                fields: [
                  'id',
                  'nombre',
                  'memoria',
                  'disco',
                  ...(isAllowed ? ['usuarioIngreso', 'contrasenaIngreso'] : []),
                ],
                relations: {
                  tipoServidor: {
                    fields: ['id', 'nombre'],
                  },
                },
              },
            },
          },
        },
      })

      return response.ok({
        status: true,
        message: 'Sistema encontrado correctamente',
        sistema: data,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener sistema',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { sistema: data } = await request.validate({ schema: SistemaStoreValidator })

    const sistema = new Sistema()

    sistema.nombre = data.nombre
    sistema.idEquipoProveedor = data.idEquipoProveedor
    sistema.idServidorBd = data?.idServidorBd
    sistema.idNivelSeguridad = data.idNivelSeguridad
    sistema.idNivelSensibilidad = data.idNivelSensibilidad
    sistema.idUsuario = data?.idUsuario

    try {
      await Database.rawQuery(`ALTER SESSION SET NLS_TIMESTAMP_FORMAT='YYYY-MM-DD HH24:MI:SS'`)

      await sistema.save()

      if (data.lenguajes?.length) {
        await sistema.related('lenguajes').sync(data.lenguajes)
      }

      if (data.serviciosWeb?.length) {
        await sistema.related('servicios_web').sync(data.serviciosWeb)
      }

      if (data?.documentos?.length) {
        await sistema.related('documentos').createMany(data?.documentos)
      }

      if (data?.instancias?.length) {
        await sistema.related('instancias').createMany(
          data?.instancias?.map((i) => ({
            idServidor: i?.idServidor,
            idTipoInstancia: i?.idTipoInstancia,
            idEstadoInstancia: 3,
          }))
        )
      }

      return response.ok({
        status: true,
        message: 'Sistema creado correctamente',
        sistema: sistema.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear sistema',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { sistema: data } = await request.validate({ schema: SistemaUpdateValidator })

    const sistema = await Sistema.findOrFail(params?.id)
    await bouncer.with('SistemaPolicy').authorize('view', sistema)

    sistema.nombre = data.nombre ?? sistema.nombre
    sistema.idEquipoProveedor = data?.idEquipoProveedor ?? sistema.idEquipoProveedor
    sistema.idServidorBd = data.idServidorBd ?? sistema.idServidorBd
    sistema.idNivelSeguridad = data.idNivelSeguridad ?? sistema.idNivelSeguridad
    sistema.idNivelSensibilidad = data.idNivelSensibilidad ?? sistema.idNivelSensibilidad
    sistema.idUsuario = data.idUsuario ?? sistema.idUsuario

    try {
      await sistema.save()

      if (data.lenguajes?.length) {
        await sistema.related('lenguajes').sync(data.lenguajes)
      }

      if (data.serviciosWeb?.length) {
        await sistema.related('servicios_web').sync(data.serviciosWeb)
      }

      await sistema?.load('documentos')

      for (const documento of sistema?.documentos) {
        if (!data?.documentos?.map((doc) => doc?.id).includes(documento?.id)) {
          await documento?.delete()
        }
      }

      for (const documento of data?.documentos ?? []) {
        if (!documento?.id) {
          await DocumentoSistema.create({ idSistema: sistema?.id, ...documento })
        }
      }

      await sistema?.load('instancias')

      for (const instancia of sistema?.instancias) {
        if (!data?.instancias?.map((ins) => ins?.id).includes(instancia?.id)) {
          await instancia?.delete()
        }
      }

      for (const instancia of data?.instancias ?? []) {
        if (!instancia?.id) {
          await InstanciaSistema.create({
            idServidor: instancia.idServidor,
            idTipoInstancia: instancia.idTipoInstancia,
            idEstadoInstancia: 3,
            idSistema: sistema?.id,
          })
        }
      }

      return response.ok({
        status: true,
        message: 'sistema actualizado correctamente',
        sistema: sistema.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar sistema',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const sistema = await Sistema.findOrFail(params.id)

    try {
      await sistema.delete()

      return response.ok({
        status: true,
        message: 'Sistema eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar sistema',
        error,
      })
    }
  }
}
