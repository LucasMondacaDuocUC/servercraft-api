import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import TipoProblemaFilter from './Filters/TipoProblemaFilter'
import Incidente from './Incidente'

export default class TipoProblema extends compose(BaseModel, Filterable) {
  public static $filter = () => TipoProblemaFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @hasMany(() => Incidente, { foreignKey: 'idTipoProblema' })
  public incidentes: HasMany<typeof Incidente>
}
