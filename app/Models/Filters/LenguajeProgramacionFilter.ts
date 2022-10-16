import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import LenguajeProgramacion from 'App/Models/LenguajeProgramacion'

export default class LenguajeProgramacionFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof LenguajeProgramacion, LenguajeProgramacion>

  public q(search: string): void {
    this.$query.whereRaw(`upper("nombre") LIKE '%' || upper(?) || '%'`, [search])
  }
}
