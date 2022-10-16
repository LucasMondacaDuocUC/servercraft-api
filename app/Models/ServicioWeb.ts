import { BaseModel, column, HasMany, hasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import DocumentoServicio from './DocumentoServicio'
import Sistema from './Sistema'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import ServicioWebFilter from './Filters/ServicioWebFilter'

export default class ServicioWeb extends compose(BaseModel, Filterable) {
  public static $filter = () => ServicioWebFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public descripcion: string

  @manyToMany(() => Sistema, {
    pivotTable: 'SISTEMA_SERVICIO_WEB',
    pivotForeignKey: 'id_servicio_web',
    pivotRelatedForeignKey: 'id_sistema',
  })
  public sistemas: ManyToMany<typeof Sistema>

  @hasMany(() => DocumentoServicio, { foreignKey: 'idServicioWeb' })
  public documentos: HasMany<typeof DocumentoServicio>
}
