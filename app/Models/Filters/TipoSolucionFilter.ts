import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import TipoSolucion from 'App/Models/TipoSolucion'

export default class TipoSolucionFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof TipoSolucion, TipoSolucion>

  public q(search: string): void {
    this.$query.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
  }
}
