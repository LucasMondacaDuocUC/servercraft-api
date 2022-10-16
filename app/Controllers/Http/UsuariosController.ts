import {
  UsuariosStoreSchema,
  UsuariosUpdateContraseñaSchema,
  UsuariosUpdateSchema,
} from './../../Validators/UsuarioValidator'
import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'

export default class UsuariosController {
  public async index({ request, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const usuarios = await Usuario.filter(filters)
        .preload('rol')
        .preload('equipo_trabajo')
        .withCount('sistemas')
        .paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Usuarios listados correctamente',
        usuarios: usuarios.serialize().data,
        meta: usuarios.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar usuarios',
        error,
      })
    }
  }

  public async show({ params, response, bouncer, auth }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Responsable', 'Consultor', 'Informante'])

    try {
      const usuario = await Usuario.findOrFail(params.id === 0 ? auth.user?.id : params?.id)
      await usuario.load('rol')
      await usuario.load('equipo_trabajo')

      await bouncer.with('UsuarioPolicy').authorize('isOwner', usuario)

      return response.ok({
        status: true,
        message: 'Usuario encontrado correctamente',
        usuario: usuario.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener usuario',
        error,
      })
    }
  }

  public async store({ request, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const { usuario: data } = await request.validate({ schema: UsuariosStoreSchema })

    const usuario = new Usuario()

    usuario.rut = data.rut
    usuario.nombre = data.nombre
    usuario.apellidos = data.apellidos
    usuario.email = data.email
    usuario.password = data.password
    usuario.telefonoContacto = data.telefonoContacto
    usuario.idRolUsuario = data.idRol
    usuario.idEquipoTrabajo = data?.idEquipo

    try {
      await usuario.save()

      return response.ok({
        status: true,
        message: 'Usuario creado correctamente',
        usuario: usuario.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al crear usuario',
        error,
      })
    }
  }

  public async update({ request, params, response, bouncer, auth }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Consultor', 'Responsable', 'Informante'])

    const { usuario: data } = await request.validate({ schema: UsuariosUpdateSchema })

    const usuario = await Usuario.findOrFail(params?.id === 0 ? auth.user?.id : params.id)

    await bouncer.with('UsuarioPolicy').authorize('isOwner', usuario)

    usuario.rut = data.rut ?? usuario.rut
    usuario.nombre = data.nombre ?? usuario.nombre
    usuario.apellidos = data.apellidos ?? usuario.apellidos
    usuario.email = data.email ?? usuario.email
    usuario.telefonoContacto = data.telefonoContacto ?? usuario.telefonoContacto
    usuario.idRolUsuario = data.idRol ?? usuario.idRolUsuario
    usuario.idEquipoTrabajo = data?.idEquipo ?? usuario?.idEquipoTrabajo

    try {
      await usuario.save()

      return response.ok({
        status: true,
        message: 'Usuario actualizado correctamente',
        usuario: usuario.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar usuario',
        error,
      })
    }
  }

  public async updateImagen({ auth, request, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Consultor', 'Responsable', 'Informante'])

    const file = request.file('imagen', { size: '2mb', extnames: ['jpg', 'png', 'webp'] })

    auth.user!.imagen = Attachment.fromFile(file!)

    try {
      await auth.user!.save()

      return response.ok({
        status: true,
        message: 'Imagen de usuario actualizada correctamente',
        usuario: auth.user!.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar imagen de usuario',
        error,
      })
    }
  }

  public async updatePassword({ request, response, auth, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolesPolicy')
      .authorize('rol', ['Administrador', 'Consultor', 'Responsable', 'Informante'])

    const { usuario: data } = await request.validate({ schema: UsuariosUpdateContraseñaSchema })
    const usuario = await auth.verifyCredentials(auth.user?.email!, data.contrasenaActual)

    usuario.password = data.contrasenaNueva

    try {
      await usuario.save()

      return response.ok({
        status: true,
        message: 'Contraseña actualizada correctamente',
        usuario: usuario.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar contraseña',
        error,
      })
    }
  }

  public async destroy({ params, response, bouncer }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    const usuario = await Usuario.findOrFail(params.id)

    try {
      await usuario.delete()

      return response.ok({
        status: true,
        message: 'Usuario eliminado correctamente',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar usuario',
        error,
      })
    }
  }
}
