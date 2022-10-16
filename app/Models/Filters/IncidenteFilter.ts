import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Incidente from 'App/Models/Incidente'

export default class IncidenteFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Incidente, Incidente>

  public solucion(solucion: number): void {
    this.$query.where('idTipoSolucion', solucion)
  }

  public problema(problema: number): void {
    this.$query.where('idTipoProblema', problema)
  }

  public estado(estado: number): void {
    this.$query.where('idEstadoIncidente', estado)
  }

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("detalle_problema") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("detalle_solucion") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereHas('tipo_problema', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
        .orWhereHas('tipo_solucion', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
        .orWhereHas('equipo_trabajo', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
        .orWhereHas('instancia_sistema', (q) => {
          q.whereHas('sistema', (q) => {
            q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
          })
        })
        .orWhereHas('estado_incidente', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
    })
  }
}
