import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ActividadAuditoria from 'App/Models/ActividadAuditoria'

export default class ActividadesAuditoriaController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const actividadesAuditoria = await ActividadAuditoria.filter(filters)
        .orderBy('id', 'desc')
        .paginate(page, limit)

      const data = actividadesAuditoria.serialize()

      return response.ok({
        status: true,
        message: 'Eventos de auditoria listados correctamente',
        eventos: data.data,
        meta: data.meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar actividad de auditoria',
        error,
      })
    }
  }
}
