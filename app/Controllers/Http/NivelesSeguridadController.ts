import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import NivelSeguridad from 'App/Models/NivelSeguridad'

export default class NivelesSeguridadController {
  public async index({ response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    try {
      const nivelSeguridad = await NivelSeguridad.all()

      return response.ok({
        status: true,
        message: 'Niveles de seguridad listados correctamente',
        niveles_seguridad: nivelSeguridad.map((a) => a.serialize()),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar niveles de seguridad',
        error,
      })
    }
  }
}
