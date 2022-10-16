import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import SalaFilter from './Filters/SalaFilter'
import Rack from './Rack'
import Region from './Region'

export default class Sala extends compose(BaseModel, Filterable) {
  public static $filter = () => SalaFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public descripcion?: string

  @column({ serializeAs: null })
  public idRegion: number

  @belongsTo(() => Region, { foreignKey: 'idRegion' })
  public region: BelongsTo<typeof Region>

  @hasMany(() => Rack, { foreignKey: 'idSala' })
  public racks: HasMany<typeof Rack>
}
