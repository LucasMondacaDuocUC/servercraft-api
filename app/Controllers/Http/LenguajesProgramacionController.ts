import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LenguajeProgramacion from 'App/Models/LenguajeProgramacion'
import {
  LenguajeProgramacionStoreValidator,
  LenguajeProgramacionUpdateValidator,
} from '../../Validators/LenguajeProgramacionValidator'

export default class LenguajesProgramacionController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const lenguajeProgramacion = await LenguajeProgramacion.filter(filters)
        .withCount('sistemas')
        .paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Lenguajes de programación listados correctamente',
        lenguajes_programacion: lenguajeProgramacion.serialize().data,
        meta: lenguajeProgramacion.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar lenguajes de programación',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { lenguajeProgramacion: data } = await request.validate({
      schema: LenguajeProgramacionStoreValidator,
    })

    const lenguajeProgramacion = new LenguajeProgramacion()

    lenguajeProgramacion.nombre = data.nombre

    try {
      await lenguajeProgramacion.save()

      return response.created({
        status: true,
        message: 'Lenguaje de programación creado correctamente',
        lenguaje_programacion: lenguajeProgramacion.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear lenguaje de programación',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { lenguajeProgramacion: data } = await request.validate({
      schema: LenguajeProgramacionUpdateValidator,
    })

    const lenguajeProgramacion = await LenguajeProgramacion.findOrFail(params?.id)

    lenguajeProgramacion.nombre = data.nombre ?? lenguajeProgramacion.nombre

    try {
      await lenguajeProgramacion.save()

      return response.ok({
        status: true,
        message: 'Lenguaje de programación actualizado correctamente',
        lenguaje_programacion: lenguajeProgramacion.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar lenguaje de programación',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const lenguajeProgramacion = await LenguajeProgramacion.findOrFail(params.id)

    try {
      await lenguajeProgramacion.delete()

      return response.ok({
        status: true,
        message: 'Lenguaje de programación eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar lenguaje de programación',
        error,
      })
    }
  }
}
