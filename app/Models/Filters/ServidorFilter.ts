import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Servidor from 'App/Models/Servidor'

export default class ServidorFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Servidor, Servidor>

  public os(os: number): void {
    this.$query.where('idSistemaOperativo', os)
  }

  public tipo(tipo: number | Array<number>): void {
    if (Array.isArray(tipo)) {
      this.$query.whereIn('idTipoServidor', tipo)
    } else {
      this.$query.where('idTipoServidor', tipo)
    }
  }

  public db(db: number): void {
    this.$query.where('idBaseDatos', db)
  }

  public rack(rack: number): void {
    this.$query.where('idRack', rack)
  }

  public sala(sala: number): void {
    this.$query.whereHas('rack', (q) => {
      q.where('idSala', sala)
    })
  }

  public region(region: number): void {
    this.$query.whereHas('rack', (q) => {
      q.whereHas('sala', (q) => {
        q.where('idRegion', region)
      })
    })
  }

  public pais(pais: number): void {
    this.$query.whereHas('rack', (q) => {
      q.whereHas('sala', (q) => {
        q.whereHas('region', (q) => {
          q.where('idPais', pais)
        })
      })
    })
  }

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("ip") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("usuario_ingreso") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("disco") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("memoria") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("nombre_contacto_mantencion") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("telefono_contacto_mantencion") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("email_contacto_mantencion") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereHas('tipo_servidor', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
        .orWhereHas('sistema_operativo', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
        .orWhereHas('base_datos', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
        .orWhereHas('rack', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search]).orWhereHas(
            'sala',
            (q) => {
              q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search]).orWhereHas(
                'region',
                (q) => {
                  q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search]).orWhereHas(
                    'pais',
                    (q) => {
                      q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
                    }
                  )
                }
              )
            }
          )
        })
    })
  }
}
