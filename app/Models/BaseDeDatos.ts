import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import BaseDeDatosFilter from './Filters/BaseDeDatosFilter'
import Servidor from './Servidor'

export default class BaseDeDatos extends compose(BaseModel, Filterable) {
  public static $filter = () => BaseDeDatosFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @hasMany(() => Servidor, { foreignKey: 'idBaseDatos' })
  public servidores: HasMany<typeof Servidor>
}
