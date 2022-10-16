import {
  BaseModel,
  column,
  BelongsTo,
  belongsTo,
  manyToMany,
  ManyToMany,
  hasMany,
  HasMany,
} from '@ioc:Adonis/Lucid/Orm'
import EquipoEncargado from './EquipoEncargado'
import LenguajeProgramacion from './LenguajeProgramacion'
import NivelSeguridad from './NivelSeguridad'
import NivelSensibilidad from './NivelSensibilidad'
import ServicioWeb from './ServicioWeb'
import Usuario from './Usuario'
import InstanciaSistema from './InstanciaSistema'
import Servidor from './Servidor'
import DocumentoSistema from './DocumentoSistema'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import SistemaFilter from './Filters/SistemaFilter'
import { DateTime } from 'luxon'

export default class Sistema extends compose(BaseModel, Filterable) {
  public static $filter = () => SistemaFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column()
  public nombre: string

  @column({ serializeAs: null })
  public idEquipoProveedor: number

  @column({ serializeAs: null })
  public idServidorBd?: number

  @column({ serializeAs: null })
  public idNivelSeguridad: number

  @column({ serializeAs: null })
  public idNivelSensibilidad?: number

  @column({ serializeAs: null })
  public idUsuario: number

  @belongsTo(() => NivelSeguridad, { foreignKey: 'idNivelSeguridad' })
  public nivel_seguridad: BelongsTo<typeof NivelSeguridad>

  @belongsTo(() => NivelSensibilidad, { foreignKey: 'idNivelSensibilidad' })
  public nivel_sensibilidad: BelongsTo<typeof NivelSensibilidad>

  @belongsTo(() => Usuario, { foreignKey: 'idUsuario' })
  public usuario: BelongsTo<typeof Usuario>

  @belongsTo(() => EquipoEncargado, { foreignKey: 'idEquipoProveedor' })
  public equipo_proveedor: BelongsTo<typeof EquipoEncargado>

  @belongsTo(() => Servidor, { foreignKey: 'idServidorBd' })
  public servidor_db: BelongsTo<typeof Servidor>

  @manyToMany(() => ServicioWeb, {
    pivotTable: 'SISTEMA_SERVICIO_WEB',
    pivotForeignKey: 'id_sistema',
    pivotRelatedForeignKey: 'id_servicio_web',
  })
  public servicios_web: ManyToMany<typeof ServicioWeb>

  @manyToMany(() => LenguajeProgramacion, {
    pivotTable: 'LENGUAJE_SISTEMA',
    pivotForeignKey: 'id_sistema',
    pivotRelatedForeignKey: 'id_lenguaje_programacion',
  })
  public lenguajes: ManyToMany<typeof LenguajeProgramacion>

  @hasMany(() => InstanciaSistema, { foreignKey: 'idSistema' })
  public instancias: HasMany<typeof InstanciaSistema>

  @hasMany(() => DocumentoSistema, { foreignKey: 'idSistema' })
  public documentos: HasMany<typeof DocumentoSistema>
}
