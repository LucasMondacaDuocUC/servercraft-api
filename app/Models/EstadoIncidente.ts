import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Incidente from './Incidente'

export default class EstadoIncidente extends BaseModel {
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @hasMany(() => Incidente, { foreignKey: 'idTipoProblema' })
  public incidentes: HasMany<typeof Incidente>
}
