import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import EstadoInstancia from './EstadoInstancia'
import InstanciaSistemaFilter from './Filters/InstanciaSistemaFilter'
import Incidente from './Incidente'
import Servidor from './Servidor'
import Sistema from './Sistema'
import TipoInstancia from './TipoInstancia'

export default class InstanciaSistema extends compose(BaseModel, Filterable) {
  public static $filter = () => InstanciaSistemaFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null })
  public idServidor: number

  @column({ serializeAs: null })
  public idTipoInstancia: number

  @column({ serializeAs: null })
  public idEstadoInstancia: number

  @column({ serializeAs: null })
  public idSistema: number

  @belongsTo(() => Servidor, { foreignKey: 'idServidor' })
  public servidor: BelongsTo<typeof Servidor>

  @belongsTo(() => TipoInstancia, { foreignKey: 'idTipoInstancia' })
  public tipo_instancia: BelongsTo<typeof TipoInstancia>

  @belongsTo(() => EstadoInstancia, { foreignKey: 'idEstadoInstancia' })
  public estado_instancia: BelongsTo<typeof EstadoInstancia>

  @belongsTo(() => Sistema, { foreignKey: 'idSistema' })
  public sistema: BelongsTo<typeof Sistema>

  @hasMany(() => Incidente, { foreignKey: 'idSistema' })
  public incidentes: HasMany<typeof Incidente>
}
