import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { compose } from '@ioc:Adonis/Core/Helpers'
import Servidor from './Servidor'
import SistemaOperativoFilter from './Filters/SistemaOperativoFilter'

export default class SistemaOperativo extends compose(BaseModel, Filterable) {
  public static $filter = () => SistemaOperativoFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @hasMany(() => Servidor, { foreignKey: 'idSistemaOperativo' })
  public servidores: HasMany<typeof Servidor>
}
