import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import NivelSensibilidad from 'App/Models/NivelSensibilidad'
import {
  NivelSensibilidadStoreValidator,
  NivelSensibilidadUpdateValidator,
} from '../../Validators/NivelSensibilidadValidator'

export default class NivelesSensibilidadController {
  public async index({ response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    try {
      const nivelSensibilidad = await NivelSensibilidad.all()

      return response.ok({
        status: true,
        message: 'Niveles de sensibilidad listados correctamente',
        niveles_sensibilidad: nivelSensibilidad.map((a) => a.serialize()),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar niveles de sensibilidad',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { nivelSensibilidad: data } = await request.validate({
      schema: NivelSensibilidadStoreValidator,
    })

    const nivelSensibilidad = new NivelSensibilidad()

    nivelSensibilidad.nombre = data.nombre
    nivelSensibilidad.descripcion = data.descripcion

    try {
      await nivelSensibilidad.save()

      return response.created({
        status: true,
        message: 'Nivel de sensibilidad creado correctamente',
        nivel_sensibilidad: nivelSensibilidad.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear nivel de sensibilidad',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { nivelSensibilidad: data } = await request.validate({
      schema: NivelSensibilidadUpdateValidator,
    })

    const nivelSensibilidad = await NivelSensibilidad.findOrFail(params?.id)

    nivelSensibilidad.nombre = data.nombre ?? nivelSensibilidad.nombre
    nivelSensibilidad.descripcion = data.descripcion ?? nivelSensibilidad.descripcion

    try {
      await nivelSensibilidad.save()

      return response.ok({
        status: true,
        message: 'Nivel de sensibilidad actualizado correctamente',
        nivel_sensibilidad: nivelSensibilidad.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar nivel de sensibilidad',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const nivelSensibilidad = await NivelSensibilidad.findOrFail(params.id)

    try {
      await nivelSensibilidad.delete()

      return response.ok({
        status: true,
        message: 'Nivel de sensibilidad eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar nivel de sensibilidad',
        error,
      })
    }
  }
}
