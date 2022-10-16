import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import ProveedorSistema from 'App/Models/ProveedorSistema'
import {
  ProveedorSistemaUpdateValidator,
  ProveedorSistemaStoreValidator,
} from '../../Validators/ProveedorSistemaValidator'

export default class ProveedoresSistemaController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    try {
      const { page = 1, limit = 10, ...filters } = request.qs()

      const proveedorSistema = await ProveedorSistema.filter(filters).paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Proveedores de sistema listados correctamente',
        proveedores: proveedorSistema.serialize().data,
        meta: proveedorSistema.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar proveedores de sistema',
        error,
      })
    }
  }

  public async show({ params, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    try {
      const proveedorSistema = await ProveedorSistema.findOrFail(params.id)

      return response.ok({
        status: true,
        message: 'Proveedor de Sistema obtenido correctamente',
        proveedor: proveedorSistema.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener proveedor de sistema',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const { proveedorSistema: data } = await request.validate({
      schema: ProveedorSistemaStoreValidator,
    })

    await Database.rawQuery(`ALTER SESSION SET NLS_TIMESTAMP_FORMAT='YYYY-MM-DD HH24:MI:SS'`)

    const proveedorSistema = new ProveedorSistema()

    proveedorSistema.nombre = data.nombre
    proveedorSistema.telefonoContacto = data.telefonoContacto
    proveedorSistema.nombreRepresentante = data.nombreRepresentante
    proveedorSistema.emailContacto = data.emailContacto

    try {
      await proveedorSistema.save()

      return response.created({
        status: true,
        message: 'Proveedor de sistema creado correctamente',
        proveedor: proveedorSistema.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear proveedor de sistema',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const { proveedorSistema: data } = await request.validate({
      schema: ProveedorSistemaUpdateValidator,
    })

    const proveedor = await ProveedorSistema.findOrFail(params?.id)

    proveedor.nombre = data.nombre ?? proveedor.nombre
    proveedor.telefonoContacto = data.telefonoContacto ?? proveedor.telefonoContacto
    proveedor.nombreRepresentante = data.nombreRepresentante ?? proveedor.nombreRepresentante
    proveedor.emailContacto = data.emailContacto ?? proveedor.emailContacto

    try {
      await proveedor.save()

      return response.ok({
        status: true,
        message: 'Proveedor de sistema actualizado correctamente',
        proveedor: proveedor.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar proveedor de sistema',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const proveedor = await ProveedorSistema.findOrFail(params.id)

    try {
      await proveedor.delete()

      return response.ok({
        status: true,
        message: 'Proveedor de sistema eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar proveedor de sistema',
        error,
      })
    }
  }
}
