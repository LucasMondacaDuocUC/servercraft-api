import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EstadoInstancia from 'App/Models/EstadoInstancia'

export default class EstadosInstanciaController {
  public async index({ response }: HttpContextContract) {
    const estados = await EstadoInstancia.all()

    return response.ok({
      status: true,
      estados_instancia: estados.map((e) => e.serialize()),
    })
  }
}
