import { PaisSchema } from './../../Validators/PaisValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pais from 'App/Models/Pais'

export default class PaisesController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const paises = await Pais.filter(filters).withCount('regiones').paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Paises listados correctamente',
        paises: paises.serialize().data,
        meta: paises.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar paises',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const { pais: data } = await request.validate({ schema: PaisSchema })

    const pais = new Pais()

    pais.nombre = data.nombre

    try {
      await pais.save()

      return response.created({
        status: true,
        message: 'País creado correctamente',
        pais: pais.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear país',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const { pais: data } = await request.validate({ schema: PaisSchema })

    const pais = await Pais.findOrFail(params?.id)

    pais.nombre = data.nombre

    try {
      await pais.save()

      return response.ok({
        status: true,
        message: 'País actualizado correctamente',
        pais: pais.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar país',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const pais = await Pais.findOrFail(params.id)

    try {
      await pais.delete()

      return response.ok({
        status: true,
        message: 'País eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar país',
        error,
      })
    }
  }
}
