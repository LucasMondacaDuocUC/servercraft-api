import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Rack from 'App/Models/Rack'

export default class RackFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Rack, Rack>

  public pais(pais: number): void {
    this.$query.whereHas('sala', (q) => {
      q.whereHas('region', (q) => {
        q.where('idPais', pais)
      })
    })
  }

  public region(region: number): void {
    this.$query.whereHas('sala', (q) => {
      q.where('idRegion', region)
    })
  }

  public sala(sala: number): void {
    this.$query.where('idSala', sala)
  }

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("descripcion") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereHas('sala', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search]).orWhereHas(
            'region',
            (q) => {
              q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search]).orWhereHas(
                'pais',
                (q) => {
                  q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
                }
              )
            }
          )
        })
    })
  }
}
