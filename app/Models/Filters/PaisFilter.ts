import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Pais from 'App/Models/Pais'

export default class PaisFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Pais, Pais>

  public q(search: string): void {
    this.$query.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
  }
}
