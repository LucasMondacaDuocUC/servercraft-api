import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Servidor from './Servidor'

export default class TipoServidor extends BaseModel {
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @hasMany(() => Servidor, { foreignKey: 'idTipoServidor' })
  public servidores: HasMany<typeof Servidor>
}
