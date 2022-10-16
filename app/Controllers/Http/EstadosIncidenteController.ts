import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EstadoIncidente from 'App/Models/EstadoIncidente'

export default class EstadosIncidenteController {
  public async index({ response }: HttpContextContract) {
    const estados = await EstadoIncidente.all()

    return response.ok({
      status: true,
      estados_incidente: estados.map((e) => e.serialize()),
    })
  }
}
