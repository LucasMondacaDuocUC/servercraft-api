import { RackStoreSchema, RackUpdateSchema } from './../../Validators/RackValidator'
import Rack from 'App/Models/Rack'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RacksController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    // Flujo controlador
    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const racks = await Rack.filter(filters)
        .preload('sala', (s) => s.preload('region', (r) => r.preload('pais')))
        .withCount('servidores')
        .paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Racks listadas correctamente',
        racks: racks.serialize().data,
        meta: racks.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar racks',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const { rack: data } = await request.validate({ schema: RackStoreSchema })

    const rack = new Rack()

    rack.nombre = data.nombre
    rack.descripcion = data.descripcion
    rack.idSala = data.idSala

    try {
      await rack.save()

      return response.created({
        status: true,
        message: 'Rack creado correctamente',
        rack: rack.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear rack',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const { rack: data } = await request.validate({ schema: RackUpdateSchema })

    const rack = await Rack.findOrFail(params?.id)

    rack.nombre = data.nombre ?? rack.nombre
    rack.descripcion = data.descripcion ?? rack.descripcion
    rack.idSala = data.idSala ?? rack.idSala

    try {
      await rack.save()

      return response.ok({
        status: true,
        message: 'Rack actualizado correctamente',
        rack: rack.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar rack',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const rack = await Rack.findOrFail(params.id)

    try {
      await rack.delete()

      return response.ok({
        status: true,
        message: 'Rack eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar rack',
        error,
      })
    }
  }
}
