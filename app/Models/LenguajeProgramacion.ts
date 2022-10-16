import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import Sistema from './Sistema'
import LenguajeProgramacionFilter from './Filters/LenguajeProgramacionFilter'

export default class LenguajeProgramacion extends compose(BaseModel, Filterable) {
  public static $filter = () => LenguajeProgramacionFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @manyToMany(() => Sistema, {
    pivotTable: 'LENGUAJE_SISTEMA',
    pivotForeignKey: 'id_lenguaje_programacion',
    pivotRelatedForeignKey: 'id_sistema',
  })
  public sistemas: ManyToMany<typeof Sistema>
}
