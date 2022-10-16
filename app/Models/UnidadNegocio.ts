import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import EquipoTrabajo from './EquipoTrabajo'
import { compose } from '@ioc:Adonis/Core/Helpers'
import UnidadNegocioFilter from './Filters/UnidadNegocioFilter'

export default class UnidadNegocio extends compose(BaseModel, Filterable) {
  public static $filter = () => UnidadNegocioFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @hasMany(() => EquipoTrabajo, { foreignKey: 'idUnidadNegocio' })
  public equipos: HasMany<typeof EquipoTrabajo>
}
