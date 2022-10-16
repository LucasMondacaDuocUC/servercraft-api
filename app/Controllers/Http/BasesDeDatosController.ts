import { BaseDatosSchema } from '../../Validators/BaseDatosValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseDeDatos from 'App/Models/BaseDeDatos'

export default class BasesDeDatosController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    // Flujo controlador
    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const basesDatos = await BaseDeDatos.filter(filters)
        .withCount('servidores')
        .paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Bases de datos listadas correctamente',
        bases_de_datos: basesDatos.serialize().data,
        meta: basesDatos.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar bases de datos',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    // Flujo controlador
    const { baseDatos: data } = await request.validate({ schema: BaseDatosSchema })

    const baseDatos = new BaseDeDatos()

    baseDatos.nombre = data.nombre

    try {
      await baseDatos.save()

      return response.created({
        status: true,
        message: 'Base de datos creada correctamente',
        base_de_datos: baseDatos.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear base de datos',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    // Flujo controlador
    const { baseDatos: data } = await request.validate({ schema: BaseDatosSchema })

    const baseDatos = await BaseDeDatos.findOrFail(params?.id)

    baseDatos.nombre = data.nombre ?? baseDatos?.nombre

    try {
      await baseDatos.save()

      return response.ok({
        status: true,
        message: 'Base de datos actualizado correctamente',
        base_de_datos: baseDatos.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar Base de datos',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const baseDatos = await BaseDeDatos.findOrFail(params.id)

    try {
      await baseDatos.delete()

      return response.ok({
        status: true,
        message: 'Base de datos eliminada correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar base de datos',
        error,
      })
    }
  }
}
