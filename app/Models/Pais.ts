import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import PaisFilter from './Filters/PaisFilter'
import Region from './Region'

export default class Pais extends compose(BaseModel, Filterable) {
  public static $filter = () => PaisFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @hasMany(() => Region, { foreignKey: 'idPais' })
  public regiones: HasMany<typeof Region>
}
