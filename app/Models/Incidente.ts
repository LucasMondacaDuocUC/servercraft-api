import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import EquipoTrabajo from './EquipoTrabajo'
import EstadoIncidente from './EstadoIncidente'
import IncidenteFilter from './Filters/IncidenteFilter'
import InstanciaSistema from './InstanciaSistema'
import TipoProblema from './TipoProblema'
import TipoSolucion from './TipoSolucion'

export default class Incidente extends compose(BaseModel, Filterable) {
  public static $filter = () => IncidenteFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public fechaHoraProblema: DateTime

  @column.dateTime()
  public fechaHoraSolucion: DateTime

  @column()
  public detalleProblema: string

  @column()
  public detalleSolucion?: string

  @column({ serializeAs: null })
  public idTipoProblema: number

  @column({ serializeAs: null })
  public idTipoSolucion?: number

  @column({ serializeAs: null })
  public idEquipoSolucion?: number

  @column({ serializeAs: null })
  public idSistema: number

  @column({ serializeAs: null })
  public idEstadoIncidente: number

  @belongsTo(() => InstanciaSistema, { foreignKey: 'idSistema' })
  public instancia_sistema: BelongsTo<typeof InstanciaSistema>

  @belongsTo(() => TipoProblema, { foreignKey: 'idTipoProblema' })
  public tipo_problema: BelongsTo<typeof TipoProblema>

  @belongsTo(() => TipoSolucion, { foreignKey: 'idTipoSolucion' })
  public tipo_solucion: BelongsTo<typeof TipoSolucion>

  @belongsTo(() => EstadoIncidente, { foreignKey: 'idEstadoIncidente' })
  public estado_incidente: BelongsTo<typeof EstadoIncidente>

  @belongsTo(() => EquipoTrabajo, { foreignKey: 'idEquipoSolucion' })
  public equipo_trabajo: BelongsTo<typeof EquipoTrabajo>
}
