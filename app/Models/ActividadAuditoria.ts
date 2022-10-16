import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { DateTime } from 'luxon'
import Usuario from './Usuario'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import ActividadAuditoriaFilter from './Filters/ActividadAuditoriaFilter'

export default class ActividadAuditoria extends compose(BaseModel, Filterable) {
  public static $filter = () => ActividadAuditoriaFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public fechaHora: DateTime

  @column()
  public detalleActividad: string

  @column({ serializeAs: null })
  public idUsuario: number

  @belongsTo(() => Usuario, { foreignKey: 'idUsuario' })
  public usuario: BelongsTo<typeof Usuario>
}
