import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import { compose } from '@ioc:Adonis/Core/Helpers'
import UnidadNegocio from './UnidadNegocio'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import EquipoTrabajoFilter from './Filters/EquipoTrabajoFilter'

export default class EquipoTrabajo extends compose(BaseModel, Filterable) {
  public static $filter = () => EquipoTrabajoFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column({ serializeAs: null })
  public idUnidadNegocio: number

  @belongsTo(() => UnidadNegocio, { foreignKey: 'idUnidadNegocio' })
  public unidad_negocio: BelongsTo<typeof UnidadNegocio>
}
