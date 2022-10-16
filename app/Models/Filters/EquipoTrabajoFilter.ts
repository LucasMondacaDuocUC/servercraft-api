import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import EquipoTrabajo from 'App/Models/EquipoTrabajo'

export default class EquipoTrabajoFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof EquipoTrabajo, EquipoTrabajo>
  public unidad(unidad: number): void {
    this.$query.where('idUnidadNegocio', unidad)
  }

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereHas('unidad_negocio', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
    })
  }
}
