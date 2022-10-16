import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Usuario from './Usuario'

export default class Rol extends BaseModel {
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public descripcion: string

  @hasMany(() => Usuario, { foreignKey: 'idRolUsuario' })
  public usuarios: HasMany<typeof Usuario>
}
