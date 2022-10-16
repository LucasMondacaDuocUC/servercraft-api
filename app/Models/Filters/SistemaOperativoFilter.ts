import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import SistemaOperativo from 'App/Models/SistemaOperativo'

export default class SistemaOperativoFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof SistemaOperativo, SistemaOperativo>

  public q(search: string): void {
    this.$query.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
  }
}
