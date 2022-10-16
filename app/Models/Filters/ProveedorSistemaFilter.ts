import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import ProveedorSistema from 'App/Models/ProveedorSistema'

export default class ProveedorSistemaFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof ProveedorSistema, ProveedorSistema>

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("nombre_representante") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("email_contacto") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("telefono_contacto") LIKE '%' || upper(?) || '%'`, [search])
    })
  }

  public hasTeams(_: boolean): void {
    this.$query.where((b) => b.whereHas('equipoEncargados', (_) => {}))
  }
}
