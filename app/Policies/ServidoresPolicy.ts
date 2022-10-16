import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import Usuario from 'App/Models/Usuario'
import Servidor from 'App/Models/Servidor'

export default class ServidorPolicy extends BasePolicy {
  public async view(usuario: Usuario, servidor: Servidor) {
    await servidor.load('sistemas')

    const isAdmin = usuario.idRolUsuario === 1
    const isResponsable = usuario.idRolUsuario === 2
    const ownSistemas = servidor.sistemas.filter((s) => s.idUsuario === usuario.id).length > 0

    return isAdmin || (isResponsable && ownSistemas)
  }
}
