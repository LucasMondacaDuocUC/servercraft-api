import Bouncer, { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import Usuario from 'App/Models/Usuario'
import InstanciaSistema from 'App/Models/InstanciaSistema'
import Sistema from 'App/Models/Sistema'

export default class InstanciasPolicy extends BasePolicy {
  public async isAllowedToChange(usuario: Usuario, instanciaSistema: InstanciaSistema) {
    const sistema = await Sistema.findOrFail(instanciaSistema.idSistema)

    const isAdmin = usuario.idRolUsuario === 1
    const isResponsable = usuario.idRolUsuario === 2
    const ownSistema = sistema.idUsuario === usuario.id

    if (isAdmin || (isResponsable && ownSistema)) {
      return true
    } else {
      Bouncer.deny('No tienes permiso para hacer esto', 403)
    }
  }
}
