import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DocumentoSistema from 'App/Models/DocumentoSistema'
import {
  DocumentosSistemaUpdateValidator,
  DocumentosSistemaStoreValidator,
} from '../../Validators/DocumentoSistemaValidator'

export default class DocumentosSistemaController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    // Chequeo de Rol
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor'])

    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const documentos = await DocumentoSistema.filter(filters).paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Documentos listados correctamente',
        documentos: documentos.serialize().data,
        meta: documentos.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar documentos',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { documentoSistema: data } = await request.validate({
      schema: DocumentosSistemaStoreValidator,
    })

    const documento = new DocumentoSistema()

    documento.nombre = data.nombre
    documento.url = data.url
    documento.idSistema = data.idSistema

    try {
      await documento.save()

      return response.created({
        status: true,
        message: 'Documento creado correctamente',
        documento: documento.serialize(),
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
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador', 'Responsable'])

    const { documentoSistema: data } = await request.validate({
      schema: DocumentosSistemaUpdateValidator,
    })

    const documento = await DocumentoSistema.findOrFail(params?.id)

    documento.nombre = data.nombre ?? documento.nombre
    documento.url = data.url ?? documento.url
    documento.idSistema = data.idSistema ?? documento.idSistema

    try {
      await documento.save()

      return response.ok({
        status: true,
        message: 'Documento actualizado correctamente',
        documento: documento.serialize(),
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
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const documentoSistema = await DocumentoSistema.findOrFail(params.id)

    try {
      await documentoSistema.delete()

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
