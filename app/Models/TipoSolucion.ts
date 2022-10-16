import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import TipoSolucionFilter from './Filters/TipoSolucionFilter'
import Incidente from './Incidente'

export default class TipoSolucion extends compose(BaseModel, Filterable) {
  public static $filter = () => TipoSolucionFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @hasMany(() => Incidente, { foreignKey: 'idTipoProblema' })
  public incidentes: HasMany<typeof Incidente>
}
