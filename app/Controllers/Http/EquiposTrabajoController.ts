import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EquipoTrabajo from 'App/Models/EquipoTrabajo'
import {
  EquipoTrabajoStoreValidator,
  EquipoTrabaUpdateValidator,
} from '../../Validators/EquipoTrabajoValidator'

export default class EquiposTrabajoController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const equipoTrabajo = await EquipoTrabajo.filter(filters)
        .preload('unidad_negocio')
        .paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Equipos de trabajo listados correctamente',
        equipos_trabajo: equipoTrabajo.serialize().data,
        meta: equipoTrabajo.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar equipos de trabajo',
        error,
      })
    }
  }

  public async show({ params, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    try {
      const equipoTrabajo = await EquipoTrabajo.findOrFail(params.id)
      await equipoTrabajo.load('unidad_negocio')

      return response.ok({
        status: true,
        message: 'Equipo de trabajo obtenido correctamente',
        equipo_trabajo: equipoTrabajo.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener equipo de trabajo',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const { equipoTrabajo: data } = await request.validate({ schema: EquipoTrabajoStoreValidator })

    const equipoTrabajo = new EquipoTrabajo()

    equipoTrabajo.nombre = data.nombre
    equipoTrabajo.idUnidadNegocio = data.idUnidadNegocio

    try {
      await equipoTrabajo.save()
      await equipoTrabajo.load('unidad_negocio')

      return response.created({
        status: true,
        message: 'Equipo de trabajo creado correctamente',
        equipo_trabajo: equipoTrabajo.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear equipo de trabajo',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const { equipoTrabajo: data } = await request.validate({
      schema: EquipoTrabaUpdateValidator,
    })

    const equipoTrabajo = await EquipoTrabajo.findOrFail(params?.id)

    equipoTrabajo.nombre = data.nombre ?? equipoTrabajo.nombre
    equipoTrabajo.idUnidadNegocio = data.idUnidadNegocio ?? equipoTrabajo.idUnidadNegocio

    try {
      await equipoTrabajo.save()
      await equipoTrabajo.load('unidad_negocio')

      return response.ok({
        status: true,
        message: 'Equipo de trabajo actualizado correctamente',
        equipo_trabajo: equipoTrabajo.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar equipo de trabajo',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const equipoTrabajo = await EquipoTrabajo.findOrFail(params.id)

    try {
      await equipoTrabajo.delete()

      return response.ok({
        status: true,
        message: 'Equipo de trabajo eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar equipo de trabajo',
        error,
      })
    }
  }
}
