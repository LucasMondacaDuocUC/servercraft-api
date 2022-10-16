import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import RegionFilter from './Filters/RegionFilter'
import Pais from './Pais'
import Sala from './Sala'

export default class Region extends compose(BaseModel, Filterable) {
  public static $filter = () => RegionFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column({ serializeAs: null })
  public idPais: number

  @belongsTo(() => Pais, { foreignKey: 'idPais' })
  public pais: BelongsTo<typeof Pais>

  @hasMany(() => Sala, { foreignKey: 'idRegion' })
  public salas: HasMany<typeof Sala>
}
