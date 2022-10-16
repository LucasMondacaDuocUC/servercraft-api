import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import InstanciaSistema from 'App/Models/InstanciaSistema'

export default class InstanciaSistemaFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof InstanciaSistema, InstanciaSistema>

  public tipo(tipo: number): void {
    this.$query.where('idTipoInstancia', tipo)
  }

  public servidor(servidor: number): void {
    this.$query.where('idServidor', servidor)
  }

  public sistema(sistema: number): void {
    this.$query.where('idSistema', sistema)
  }

  public estado(estado: number): void {
    this.$query.where('idEstadoInstancia', estado)
  }

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .orWhereHas('tipo_instancia', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
        .orWhereHas('servidor', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
        .orWhereHas('sistema', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
        .orWhereHas('estado_instancia', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
    })
  }
}
