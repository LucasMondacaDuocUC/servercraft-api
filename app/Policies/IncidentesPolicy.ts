import Bouncer, { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import Incidente from 'App/Models/Incidente'
import Usuario from 'App/Models/Usuario'

export default class IncidentesPolicy extends BasePolicy {
  public async isAllowedToChange(usuario: Usuario, incidente: Incidente) {
    await incidente.load('instancia_sistema', (i) => i.preload('sistema'))

    const isAdmin = usuario.idRolUsuario === 1
    const isResponsable = usuario.idRolUsuario === 2
    const ownSistema = incidente.instancia_sistema.sistema.idUsuario === usuario.id

    if (isAdmin || (isResponsable && ownSistema)) {
      return true
    } else {
      Bouncer.deny('No tienes permiso para hacer esto', 403)
    }
  }
}
