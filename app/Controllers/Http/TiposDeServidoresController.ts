import { TipoServidorSchema } from './../../Validators/TipoServidorValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TipoServidor from 'App/Models/TipoServidor'

export default class TiposDeServidoresController {
  public async index({ response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    // Flujo controlador
    try {
      const tiposServidor = await TipoServidor.all()

      return response.ok({
        status: true,
        message: 'Tipos de servidor listadas correctamente',
        tipos_servidor: tiposServidor.map((t) => t.serialize()),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar tipos de servidor',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const { tipoServidor: data } = await request.validate({ schema: TipoServidorSchema })

    const tipoServidor = await TipoServidor.findOrFail(params?.id)

    tipoServidor.nombre = data.nombre ?? tipoServidor?.nombre

    try {
      await tipoServidor.save()

      return response.ok({
        status: true,
        message: 'Tipo de servidor actualizado correctamente',
        tipo_servidor: tipoServidor.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar tipo de servidor',
        error,
      })
    }
  }
}
