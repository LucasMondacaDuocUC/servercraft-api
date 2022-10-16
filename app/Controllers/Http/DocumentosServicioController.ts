import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DocumentoServicio from 'App/Models/DocumentoServicio'
import {
  DocumentoServicioUpdateValidator,
  DocumentoServicioStoreValidator,
} from '../../Validators/DocumentoServicioValidator'

export default class DocumentosServicioController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const documentos = await DocumentoServicio.filter(filters)
        .preload('servicio_web')
        .paginate(page, limit)

      const data = documentos.serialize()

      return response.ok({
        status: true,
        message: 'Documentos listados correctamente',
        documentos: data.data,
        meta: data.meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar Documento Servicio',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { documentoServicio: data } = await request.validate({
      schema: DocumentoServicioStoreValidator,
    })

    const documentoServicio = new DocumentoServicio()

    documentoServicio.nombre = data.nombre
    documentoServicio.url = data.url
    documentoServicio.idServicioWeb = data.idServicioWeb

    try {
      await documentoServicio.save()

      return response.created({
        status: true,
        message: 'Documento creado correctamente',
        documento: documentoServicio.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear documento',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { documentoServicio: data } = await request.validate({
      schema: DocumentoServicioUpdateValidator,
    })

    const documentoServicio = await DocumentoServicio.findOrFail(params?.id)

    documentoServicio.nombre = data.nombre ?? documentoServicio.nombre
    documentoServicio.url = data.url ?? documentoServicio.url
    documentoServicio.idServicioWeb = data.idServicioWeb ?? documentoServicio.idServicioWeb

    try {
      await documentoServicio.save()

      return response.ok({
        status: true,
        message: 'Documento actualizado correctamente',
        documento: documentoServicio.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar documento',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const documentoServicio = await DocumentoServicio.findOrFail(params.id)

    try {
      await documentoServicio.delete()

      return response.ok({
        status: true,
        message: 'Documento eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar documento',
        error,
      })
    }
  }
}
