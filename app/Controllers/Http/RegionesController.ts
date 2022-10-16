import { RegionStoreSchema, RegionUpdateSchema } from './../../Validators/RegionValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Region from 'App/Models/Region'

export default class RegionesController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const regiones = await Region.filter(filters)
        .preload('pais')
        .withCount('salas')
        .paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Regiones listados correctamente',
        regiones: regiones.serialize().data,
        meta: regiones.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar regiones',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const { region: data } = await request.validate({ schema: RegionStoreSchema })

    const region = new Region()

    region.nombre = data.nombre
    region.idPais = data.idPais

    try {
      await region.save()

      return response.created({
        status: true,
        message: 'Región creada correctamente',
        region: region.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear región',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const { region: data } = await request.validate({ schema: RegionUpdateSchema })

    const region = await Region.findOrFail(params?.id)

    region.nombre = data.nombre ?? region.nombre
    region.idPais = data.idPais ?? region.idPais

    try {
      await region.save()

      return response.ok({
        status: true,
        message: 'Región actualizada correctamente',
        region: region.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar región',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const region = await Region.findOrFail(params.id)

    try {
      await region.delete()

      return response.ok({
        status: true,
        message: 'Región eliminada correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar región',
        error,
      })
    }
  }
}
