import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Rol extends BaseModel {
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombreTabla: string

  @column()
  public codigoError: number

  @column()
  public mensajeError: string
}
