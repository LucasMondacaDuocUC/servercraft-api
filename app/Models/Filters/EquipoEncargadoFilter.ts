import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import EquipoEncargado from 'App/Models/EquipoEncargado'

export default class EquipoEncargadoFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof EquipoEncargado, EquipoEncargado>

  public proveedor(proveedor: number): void {
    this.$query.where('idProveedorSistema', proveedor)
  }

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("nombre_representante") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("email_contacto") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("telefono_contacto") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereHas('proveedor_sistema', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
    })
  }
}
