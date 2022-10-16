import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Usuario from 'App/Models/Usuario'

export default class UsuarioFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Usuario, Usuario>

  public rol(rol: number | Array<number>): void {
    if (Array.isArray(rol)) {
      this.$query.whereIn('idRolUsuario', rol)
    } else {
      this.$query.where('idRolUsuario', rol)
    }
  }

  public equipo(equipo: number): void {
    this.$query.where('idEquipoTrabajo', equipo)
  }

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("apellidos") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereHas('rol', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
        .orWhereHas('equipo_trabajo', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
    })
  }
}
