import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Sala from 'App/Models/Sala'

export default class SalaFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Sala, Sala>

  public pais(pais: number): void {
    this.$query.whereHas('region', (q) => q.where('idPais', pais))
  }

  public region(region: number): void {
    this.$query.where('idRegion', region)
  }

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("descripcion") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereHas('region', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search]).orWhereHas(
            'pais',
            (q) => q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
          )
        })
    })
  }
}
