import Bouncer, { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import Usuario from 'App/Models/Usuario'

export default class UsuarioPolicy extends BasePolicy {
  public async isOwner(user: Usuario, usuario?: Usuario) {
    const isAdmin = user.idRolUsuario === 1
    const ownUser = user.id === usuario?.id

    if (isAdmin || ownUser) {
      return true
    } else {
      Bouncer.deny('No tienes permiso para hacer esto', 403)
    }
  }
}
