import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import UnidadNegocio from 'App/Models/UnidadNegocio'

export default class UnidadNegocioFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof UnidadNegocio, UnidadNegocio>

  public q(search: string): void {
    this.$query.where((builder) => {
      builder.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
    })
  }
}
