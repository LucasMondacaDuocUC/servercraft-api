import { TipoSolucionSchema } from './../../Validators/TipoSolucionValidator'
import TipoSolucion from 'App/Models/TipoSolucion'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TiposSolucionController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor', 'Informante'])

    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const tiposSolucion = await TipoSolucion.filter(filters).paginate(page)

      return response.ok({
        status: true,
        message: 'Tipos de solución listados correctamente',
        tipos_solucion: tiposSolucion.serialize().data,
        meta: tiposSolucion.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar tipos de solución',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { tipoSolucion: data } = await request.validate({ schema: TipoSolucionSchema })

    const tipoSolucion = new TipoSolucion()

    tipoSolucion.nombre = data.nombre

    try {
      await tipoSolucion.save()

      return response.ok({
        status: true,
        message: 'Tipo de solución creada correctamente',
        tipo_solucion: tipoSolucion.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear tipo de solucion',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { tipoSolucion: data } = await request.validate({ schema: TipoSolucionSchema })

    const tipoSolucion = await TipoSolucion.findOrFail(params?.id)

    tipoSolucion.nombre = data.nombre

    try {
      await tipoSolucion.save()

      return response.ok({
        status: true,
        message: 'Tipo de solución actualizado correctamente',
        tipo_solucion: tipoSolucion.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar tipo de solución',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const tipoSolucion = await TipoSolucion.findOrFail(params.id)

    try {
      await tipoSolucion.delete()

      return response.ok({
        status: true,
        message: 'Tipo de solución eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar tipo de solución',
        error,
      })
    }
  }
}
