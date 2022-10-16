import { TipoProblemaSchema } from './../../Validators/TipoProblemaValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TipoProblema from 'App/Models/TipoProblema'

export default class TiposProblemaController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Consultor', 'Responsable', 'Informante'])

    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const tipoProblema = await TipoProblema.filter(filters).paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Tipos de problema listados correctamente',
        tipos_problema: tipoProblema.serialize().data,
        meta: tipoProblema.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar tipos de problema',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor', 'Informante'])

    const { tipoProblema: data } = await request.validate({ schema: TipoProblemaSchema })

    const tipoProblema = new TipoProblema()

    tipoProblema.nombre = data.nombre

    try {
      await tipoProblema.save()

      return response.ok({
        status: true,
        message: 'Tipo de problema creado correctamente',
        tipo_problema: tipoProblema.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear tipo de problema',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { tipoProblema: data } = await request.validate({ schema: TipoProblemaSchema })

    const tipoProblema = await TipoProblema.findOrFail(params?.id)

    tipoProblema.nombre = data.nombre

    try {
      await tipoProblema.save()

      return response.ok({
        status: true,
        message: 'Tipo de problema actualizado correctamente',
        tipo_problema: tipoProblema.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar tipo de problema',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const tipoProblema = await TipoProblema.findOrFail(params.id)

    try {
      await tipoProblema.delete()

      return response.ok({
        status: true,
        message: 'Tipo de problema eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar tipo de problema',
        error,
      })
    }
  }
}
