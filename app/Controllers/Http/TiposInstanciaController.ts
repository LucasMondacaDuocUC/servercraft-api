import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TipoInstancia from 'App/Models/TipoInstancia'

export default class TiposInstanciaController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Consultor', 'Responsable', 'Informante'])

    const { page = 1, limit = 10 } = request.qs()

    try {
      const tiposInstancia = await TipoInstancia.query().paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Tipos de instancia listados correctamente',
        tipos_instancia: tiposInstancia.serialize().data,
        meta: tiposInstancia.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar tipos de instancia',
        error,
      })
    }
  }
}
