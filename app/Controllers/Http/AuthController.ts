import { LoginSchema } from './../../Validators/AuthValidator'
import Database from '@ioc:Adonis/Lucid/Database'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RecuperarContrasenaSchema } from './../../Validators/RecuperarContraseñalValidator'
import { CrearContraseñaSchema } from './../../Validators/CrearContraseñaValidator'
import Mail from '@ioc:Adonis/Addons/Mail'
import Encryption from '@ioc:Adonis/Core/Encryption'
import Usuario from 'App/Models/Usuario'

export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    const { usuario } = await request.validate({ schema: LoginSchema })

    try {
      await Database.rawQuery(`ALTER SESSION SET NLS_TIMESTAMP_FORMAT='YYYY-MM-DD HH24:MI:SS'`)
      const token = await auth.attempt(usuario.email, usuario.password)

      return response.created({ status: true, message: 'Inició sesión correctamente', token })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Credenciales incorrectas',
        error: error,
      })
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    try {
      await auth.use('api').revoke()

      return response.ok({ status: true, message: 'Ha cerrado sesión correctamente' })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al cerrar sesión, por favor intentelo nuevamente.',
        error: error,
      })
    }
  }

  public async recoverAccount({ auth, request, response }: HttpContextContract) {
    const { usuario } = await request.validate({ schema: RecuperarContrasenaSchema })

    try {
      const user = await Usuario.findByOrFail('email', usuario.email)
      await Database.rawQuery(`ALTER SESSION SET NLS_TIMESTAMP_FORMAT='YYYY-MM-DD HH24:MI:SS'`)

      const token = await auth.use('api').generate(user)
      const encrypted = Encryption.encrypt(token.tokenHash)

      await Mail.send((message) => {
        message
          .from('no-reply@servercraft.cl')
          .to(usuario.email)
          .subject('Reestablecer contraseña')
          .htmlView('emails/recovery', {
            name: `${user.nombre} ${user.apellidos}`,
            url: `https://www.servercraft.ga/recuperar/nueva-contrasena?t=${encrypted}`,
          })
      })
    } catch (error) {}

    return response.ok({ status: true })
  }

  public async createNewPassword({ request, response }: HttpContextContract) {
    const { contrasenaNueva, token } = await request.validate({
      schema: CrearContraseñaSchema,
    })

    try {
      const decodedToken: string | null = Encryption.decrypt(token)

      if (decodedToken) {
        const isValidToken = await Database.query()
          .from('API_TOKEN')
          .select('token', 'user_id')
          .where('token', decodedToken)

        if (!isValidToken.length) throw new Error('')

        const usuario = await Usuario.findByOrFail('id', isValidToken?.[0].user_id)

        usuario.password = contrasenaNueva

        await usuario.save()

        await Database.query().from('API_TOKEN').where('token', decodedToken).delete()
      } else {
        throw new Error('')
      }

      return response.ok({ status: true })
    } catch (error) {
      return response.badRequest({ status: false })
    }
  }
}
