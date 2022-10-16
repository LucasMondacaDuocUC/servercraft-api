import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import DocumentoSistemaFilter from './Filters/DocumentoSistemaFilter'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import Sistema from './Sistema'

export default class DocumentoSistema extends compose(BaseModel, Filterable) {
  public static $filter = () => DocumentoSistemaFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public url: string

  @column({ serializeAs: null })
  public idSistema: number

  @belongsTo(() => Sistema, { foreignKey: 'idSistema' })
  public sistema: BelongsTo<typeof Sistema>
}
