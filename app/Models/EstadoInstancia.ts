import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import InstanciaSistema from './InstanciaSistema'

export default class EstadoInstancia extends BaseModel {
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @hasMany(() => InstanciaSistema, { foreignKey: 'idEstadoInstancia' })
  public instancias: HasMany<typeof InstanciaSistema>
}
