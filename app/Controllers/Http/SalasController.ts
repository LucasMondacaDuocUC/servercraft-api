import { SalaStoreSchema, SalaUpdateSchema } from './../../Validators/SalaValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sala from 'App/Models/Sala'

export default class SalasController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    // Flujo controlador
    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const salas = await Sala.filter(filters)
        .preload('region', (r) => r.preload('pais'))
        .withCount('racks')
        .paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Salas listadas correctamente',
        salas: salas.serialize().data,
        meta: salas.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar salas',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const { sala: data } = await request.validate({ schema: SalaStoreSchema })

    const sala = new Sala()

    sala.nombre = data.nombre
    sala.descripcion = data.descripcion
    sala.idRegion = data.idRegion

    try {
      await sala.save()

      return response.created({
        status: true,
        message: 'Sala creada correctamente',
        sala: sala.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear usuario',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const { sala: data } = await request.validate({ schema: SalaUpdateSchema })

    const sala = await Sala.findOrFail(params?.id)

    sala.nombre = data.nombre ?? sala.nombre
    sala.descripcion = data.descripcion === null ? undefined : data.descripcion
    sala.idRegion = data.idRegion ?? sala.idRegion

    try {
      await sala.save()

      return response.ok({
        status: true,
        message: 'Sala actualizada correctamente',
        sala: sala.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar sala',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const sala = await Sala.findOrFail(params.id)

    try {
      await sala.delete()

      return response.ok({
        status: true,
        message: 'Sala eliminada correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar sala',
        error,
      })
    }
  }
}
