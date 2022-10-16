import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Region from 'App/Models/Region'

export default class RegionFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Region, Region>

  public pais(pais: number): void {
    this.$query.where('idPais', pais)
  }

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereHas('pais', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
    })
  }
}
