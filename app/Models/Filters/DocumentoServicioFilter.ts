import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import DocumentoServicio from 'App/Models/DocumentoServicio'

export default class DocumentoServicioFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof DocumentoServicio, DocumentoServicio>

  public servicio(servicioWeb: number): void {
    this.$query.where('idServicioWeb', servicioWeb)
  }

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("url") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereHas('servicio_web', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search]).orWhereRaw(
            `upper("descripcion") LIKE '%' || upper(?) || '%'`,
            [search]
          )
        })
    })
  }
}
