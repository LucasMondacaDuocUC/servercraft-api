import { BaseModel, hasMany, HasMany, column } from '@ioc:Adonis/Lucid/Orm'

import Sistema from './Sistema'

export default class NivelSeguridad extends BaseModel {
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public descripcion: string

  @hasMany(() => Sistema, { foreignKey: 'idNivelSeguridad' })
  public sistemas: HasMany<typeof Sistema>
}
