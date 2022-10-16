import { SistemaOperativoSchema } from './../../Validators/SistemaOperativoValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SistemaOperativo from 'App/Models/SistemaOperativo'

export default class SistemasOperativosController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    // Flujo controlador
    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const sistemasOperativos = await SistemaOperativo.filter(filters).paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Sistemas operativos listados correctamente',
        sistemas_operativos: sistemasOperativos.serialize().data,
        meta: sistemasOperativos.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar sistemas operativos',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    // Flujo controlador
    const { sistemaOperativo: data } = await request.validate({ schema: SistemaOperativoSchema })

    const sistemaOperativo = new SistemaOperativo()

    sistemaOperativo.nombre = data.nombre

    try {
      await sistemaOperativo.save()

      return response.created({
        status: true,
        message: 'Sistema Operativo creado correctamente',
        sistema_operativo: sistemaOperativo.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear sistema operativo',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    // Flujo controlador
    const { sistemaOperativo: data } = await request.validate({ schema: SistemaOperativoSchema })

    const sistemaOperativo = await SistemaOperativo.findOrFail(params?.id)

    sistemaOperativo.nombre = data.nombre ?? sistemaOperativo?.nombre

    try {
      await sistemaOperativo.save()

      return response.ok({
        status: true,
        message: 'Sistema operativo actualizado correctamente',
        sistema_operativo: sistemaOperativo.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar sistema operativo',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    // Flujo controlador
    const sistemaOperativo = await SistemaOperativo.findOrFail(params.id)

    try {
      await sistemaOperativo.delete()

      return response.ok({
        status: true,
        message: 'Sistema operativo eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar sistema operativo',
        error,
      })
    }
  }
}
