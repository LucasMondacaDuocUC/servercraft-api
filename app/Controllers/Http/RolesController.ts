import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rol from 'App/Models/Rol'

export default class RolesController {
  public async index({ response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    try {
      const rol = await Rol.all()

      return response.ok({
        status: true,
        message: 'Roles listados correctamente',
        rol: rol.map((a) => a.serialize()),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar rol',
        error,
      })
    }
  }
}
