import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import ServicioWeb from 'App/Models/ServicioWeb'

export default class ServicioWebFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof ServicioWeb, ServicioWeb>

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("descripcion") LIKE '%' || upper(?) || '%'`, [search])
    })
  }
}
