import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import UsuarioFilter from './Filters/UsuarioFilter'
import EquipoTrabajo from './EquipoTrabajo'
import Rol from './Rol'
import { beforeSave } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Sistema from './Sistema'

export default class Usuario extends compose(BaseModel, Filterable) {
  public static $filter = () => UsuarioFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public rut: string

  @column()
  public nombre: string

  @column()
  public apellidos: string

  @column()
  public email: string

  @column({ serializeAs: null, columnName: 'contrasena' })
  public password: string

  @column()
  public telefonoContacto: string

  @attachment({ folder: 'usuarios', preComputeUrl: true })
  public imagen?: AttachmentContract

  @column({ serializeAs: null })
  public idEquipoTrabajo?: number

  @column({ serializeAs: null })
  public idRolUsuario: number

  @belongsTo(() => EquipoTrabajo, { foreignKey: 'idEquipoTrabajo' })
  public equipo_trabajo: BelongsTo<typeof EquipoTrabajo>

  @belongsTo(() => Rol, { foreignKey: 'idRolUsuario' })
  public rol: BelongsTo<typeof Rol>

  @hasMany(() => Sistema, { foreignKey: 'idUsuario' })
  public sistemas: HasMany<typeof Sistema>

  @beforeSave()
  public static async hashPassword(usuario: Usuario) {
    if (usuario.$dirty.password) {
      usuario.password = await Hash.make(usuario.password)
    }
  }
}
