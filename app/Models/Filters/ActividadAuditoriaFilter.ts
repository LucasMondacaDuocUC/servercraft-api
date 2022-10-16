import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import ActividadAuditoria from 'App/Models/ActividadAuditoria'

export default class ActividadAuditoriaFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof ActividadAuditoria, ActividadAuditoria>

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("fecha_hora") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("detalle_actividad") LIKE '%' || upper(?) || '%'`, [search])
    })
  }
}
