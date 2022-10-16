import { string } from '@ioc:Adonis/Core/Helpers'
import { SnakeCaseNamingStrategy, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export class OracleNamingStrategy extends SnakeCaseNamingStrategy {
  public tableName(model: typeof BaseModel) {
    return string.snakeCase(model.name).toUpperCase()
  }
}
