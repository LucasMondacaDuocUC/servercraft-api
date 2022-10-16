import Bouncer from '@ioc:Adonis/Addons/Bouncer'
import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import Usuario from 'App/Models/Usuario'

type UserRoles = 'Administrador' | 'Responsable' | 'Consultor' | 'Informante'

export default class RolesPolicy extends BasePolicy {
  public async rol(usuario: Usuario, roles: Array<UserRoles>) {
    await usuario.load('rol')

    if (roles.includes(usuario.rol.nombre as UserRoles)) {
      return true
    }

    return Bouncer.deny('No tienes permiso para acceder a este recurso', 403)
  }
}
