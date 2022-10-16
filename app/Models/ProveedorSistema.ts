import { BaseModel, hasMany, HasMany, column } from '@ioc:Adonis/Lucid/Orm'
import EquipoEncargado from './EquipoEncargado'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import ProveedorSistemaFilter from './Filters/ProveedorSistemaFilter'
import { DateTime } from 'luxon'

export default class ProveedorSistema extends compose(BaseModel, Filterable) {
  public static $filter = () => ProveedorSistemaFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column()
  public nombre: string

  @column()
  public telefonoContacto: string

  @column()
  public emailContacto: string

  @column()
  public nombreRepresentante: string

  @hasMany(() => EquipoEncargado, { foreignKey: 'idProveedorSistema' })
  public equipoEncargados: HasMany<typeof EquipoEncargado>
}
