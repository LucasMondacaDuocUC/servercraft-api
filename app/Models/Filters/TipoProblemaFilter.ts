import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import TipoProblema from 'App/Models/TipoProblema'

export default class TipoProblemaFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof TipoProblema, TipoProblema>

  public q(search: string): void {
    this.$query.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
  }
}
