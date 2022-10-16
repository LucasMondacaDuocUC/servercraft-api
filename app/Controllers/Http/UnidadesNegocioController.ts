import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnidadNegocio from 'App/Models/UnidadNegocio'
import {
  UnidadNegocioStoreValidator,
  UnidadNegocioUpdateValidator,
} from '../../Validators/UnidadNegocioValidator'

export default class UnidadesNegocioController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const unidad = await UnidadNegocio.filter(filters).withCount('equipos').paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Unidades de negocio listadas correctamente',
        unidades_negocio: unidad.serialize().data,
        meta: unidad.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar unidades de negocio',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const { unidadNegocio: data } = await request.validate({ schema: UnidadNegocioStoreValidator })

    const unidadNegocio = new UnidadNegocio()

    unidadNegocio.nombre = data.nombre

    try {
      await unidadNegocio.save()

      return response.created({
        status: true,
        message: 'Unidad de negocio creada correctamente',
        unidad_negocio: unidadNegocio.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear unidad de negocio',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const { unidadNegocio: data } = await request.validate({
      schema: UnidadNegocioUpdateValidator,
    })

    const unidadNegocio = await UnidadNegocio.findOrFail(params?.id)

    unidadNegocio.nombre = data.nombre ?? unidadNegocio.nombre

    try {
      await unidadNegocio.save()

      return response.ok({
        status: true,
        message: 'Unidad de negocio actualizada correctamente',
        unidadNegocio: unidadNegocio.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar unidad de negocio',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const unidadNegocio = await UnidadNegocio.findOrFail(params.id)

    try {
      await unidadNegocio.delete()

      return response.ok({
        status: true,
        message: 'Unidad de negocio eliminada correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar unidad de negocio',
        error,
      })
    }
  }
}
