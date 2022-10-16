import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import ServicioWeb from './ServicioWeb'
import UsuarioDocumentoServicioFilter from './Filters/DocumentoServicioFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'

export default class DocumentoServicio extends compose(BaseModel, Filterable) {
  public static $filter = () => UsuarioDocumentoServicioFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public url: string

  @column({ serializeAs: null })
  public idServicioWeb: number

  @belongsTo(() => ServicioWeb, { foreignKey: 'idServicioWeb' })
  public servicio_web: BelongsTo<typeof ServicioWeb>
}
