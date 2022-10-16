import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import BaseDeDatos from './BaseDeDatos'
import ServidorFilter from './Filters/ServidorFilter'
import InstanciaSistema from './InstanciaSistema'
import Rack from './Rack'
import Sistema from './Sistema'
import SistemaOperativo from './SistemaOperativo'
import TipoServidor from './TipoServidor'

export default class Servidor extends compose(BaseModel, Filterable) {
  public static $filter = () => ServidorFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public ip: string

  @column()
  public usuarioIngreso: string

  @column()
  public contrasenaIngreso: string

  @column()
  public disco: number

  @column()
  public memoria: number

  @column({ serialize: (value: string) => value === '1' })
  public poseeGarantia: string | boolean

  @column()
  public nombreContactoMantencion?: string

  @column()
  public telefonoContactoMantencion?: string

  @column()
  public emailContactoMantencion?: string

  @column({ serializeAs: null })
  public idRack: number

  @column({ serializeAs: null })
  public idTipoServidor: number

  @column({ serializeAs: null })
  public idSistemaOperativo: number

  @column({ serializeAs: null })
  public idBaseDatos?: number

  @belongsTo(() => Rack, { foreignKey: 'idRack' })
  public rack: BelongsTo<typeof Rack>

  @belongsTo(() => TipoServidor, { foreignKey: 'idTipoServidor' })
  public tipo_servidor: BelongsTo<typeof TipoServidor>

  @belongsTo(() => SistemaOperativo, { foreignKey: 'idSistemaOperativo' })
  public sistema_operativo: BelongsTo<typeof SistemaOperativo>

  @belongsTo(() => BaseDeDatos, { foreignKey: 'idBaseDatos' })
  public base_datos: BelongsTo<typeof BaseDeDatos>

  @hasMany(() => Sistema, { foreignKey: 'idServidorBd', serializeAs: null })
  public sistemas: HasMany<typeof Sistema>

  @hasMany(() => InstanciaSistema, { foreignKey: 'idServidor', serializeAs: null })
  public instancias: HasMany<typeof InstanciaSistema>
}
