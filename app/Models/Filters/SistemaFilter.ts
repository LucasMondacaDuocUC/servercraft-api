import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Sistema from 'App/Models/Sistema'

export default class SistemaFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Sistema, Sistema>

  public lenguaje(lenguaje: number): void {
    this.$query.whereHas('lenguajes', (q) => {
      q.where('id', lenguaje)
    })
  }

  public instancia(instancia: number): void {
    this.$query.whereHas('instancias', (q) => {
      q.where('id', instancia)
    })
  }

  public db(db: number): void {
    this.$query.whereHas('servidor_db', (q) => {
      q.whereHas('base_datos', (q) => {
        q.where('idBaseDatos', db)
      })
    })
  }

  public servidor(servidor: number): void {
    this.$query.where('idServidorBd', servidor)
  }

  public seguridad(seguridad: number): void {
    this.$query.where('idNivelSeguridad', seguridad)
  }

  public sensibilidad(sensibilidad: number): void {
    this.$query.where('idNivelSensibilidad', sensibilidad)
  }
  public equipoProveedor(equipoProveedor: number): void {
    this.$query.where('idEquipoProveedor', equipoProveedor)
  }

  public proveedor(proveedor: number): void {
    this.$query.whereHas('equipo_proveedor', (q) => {
      q.where('idProveedorSistema', proveedor)
    })
  }

  public usuario(usuario: number): void {
    this.$query.where('idUsuario', usuario)
  }

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereHas('usuario', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
        .orWhereHas('equipo_proveedor', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search]).orWhereHas(
            'proveedor_sistema',
            (q) => {
              q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
            }
          )
        })
        .orWhereHas('servidor_db', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search]).orWhereHas(
            'base_datos',
            (q) => {
              q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
            }
          )
        })
        .orWhereHas('nivel_sensibilidad', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
        .orWhereHas('nivel_seguridad', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
        .orWhereHas('lenguajes', (q) => {
          q.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
        })
    })
  }
}
