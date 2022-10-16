import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ServicioWeb from 'App/Models/ServicioWeb'
import {
  ServicioWebStoreValidator,
  ServicioWebUpdateValidator,
} from '../../Validators/ServicioWebValidator'

export default class ServiciosWebController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    try {
      const { page = 1, limit = 10, ...filters } = request.qs()

      const servicio = await ServicioWeb.filter(filters).withCount('sistemas').paginate(page, limit)

      const data = servicio.serialize()

      return response.ok({
        status: true,
        message: 'Servicios listados correctamente',
        servicios: data.data,
        meta: data.meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar servicios',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { servicioWeb: data } = await request.validate({
      schema: ServicioWebStoreValidator,
    })

    const servicio = new ServicioWeb()

    servicio.nombre = data.nombre
    servicio.descripcion = data.descripcion

    try {
      await servicio.save()

      return response.created({
        status: true,
        message: 'Servicio creado correctamente',
        servicio: servicio.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear servicio',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { servicioWeb: data } = await request.validate({
      schema: ServicioWebUpdateValidator,
    })

    const servicio = await ServicioWeb.findOrFail(params?.id)

    servicio.nombre = data.nombre ?? servicio.nombre
    servicio.descripcion = data.descripcion ?? servicio.descripcion

    try {
      await servicio.save()

      return response.ok({
        status: true,
        message: 'Servicio actualizado correctamente',
        servicio: servicio.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar servicio',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const servicio = await ServicioWeb.findOrFail(params.id)

    try {
      await servicio.delete()

      return response.ok({
        status: true,
        message: 'Servicio eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar servicio',
        error,
      })
    }
  }
}
