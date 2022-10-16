import Bouncer, { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import Usuario from 'App/Models/Usuario'
import Sistema from 'App/Models/Sistema'

export default class SistemaPolicy extends BasePolicy {
  public async view(usuario: Usuario, Sistema: Sistema) {
    const isAdmin = usuario.idRolUsuario === 1
    const isResponsable = usuario.idRolUsuario === 2
    const ownSistema = Sistema.idUsuario === usuario.id

    if (isAdmin || (isResponsable && ownSistema)) {
      return true
    } else {
      Bouncer.deny('No tienes permiso para hacer esto', 403)
    }
  }
}
