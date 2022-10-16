import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import RackFilter from './Filters/RackFilter'
import Sala from './Sala'
import Servidor from './Servidor'

export default class Rack extends compose(BaseModel, Filterable) {
  public static $filter = () => RackFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public descripcion?: string

  @column({ serializeAs: null })
  public idSala: number

  @belongsTo(() => Sala, { foreignKey: 'idSala' })
  public sala: BelongsTo<typeof Sala>

  @hasMany(() => Servidor, { foreignKey: 'idRack' })
  public servidores: HasMany<typeof Servidor>
}
