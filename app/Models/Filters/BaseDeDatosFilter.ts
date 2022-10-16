import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import BaseDeDatos from 'App/Models/BaseDeDatos'

export default class BaseDeDatosFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof BaseDeDatos, BaseDeDatos>

  public q(search: string): void {
    this.$query.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
  }
}
