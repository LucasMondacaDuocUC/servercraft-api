import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import ProveedorSistema from './ProveedorSistema'
import Sistema from './Sistema'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import EquipoEncargadoFilter from './Filters/EquipoEncargadoFilter'

export default class EquipoEncargado extends compose(BaseModel, Filterable) {
  public static $filter = () => EquipoEncargadoFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public telefonoContacto: string

  @column()
  public emailContacto: string

  @column()
  public nombreRepresentante: string

  @column({ serializeAs: null })
  public idProveedorSistema: number

  @belongsTo(() => ProveedorSistema, { foreignKey: 'idProveedorSistema' })
  public proveedor_sistema: BelongsTo<typeof ProveedorSistema>

  @hasMany(() => Sistema, { foreignKey: 'idEncargadoProveedor' })
  public sistemas: HasMany<typeof Sistema>
}
