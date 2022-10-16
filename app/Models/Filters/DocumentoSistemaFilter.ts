import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import DocumentoSistema from 'App/Models/DocumentoSistema'

export default class DocumentoSistemaFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof DocumentoSistema, DocumentoSistema>

  public sistema(sistema: number): void {
    this.$query.where('idSistema', sistema)
  }
  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        .whereRaw(`upper("url") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereHas('sistema', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
    })
  }
}
