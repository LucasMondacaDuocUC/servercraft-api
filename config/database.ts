import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  connection: Env.get('DB_CONNECTION'),

  connections: {
    oracle: {
      client: 'oracledb',
      connection: {
        host: Env.get('ORACLE_HOST'),
        port: Env.get('ORACLE_PORT'),
        user: Env.get('ORACLE_USER'),
        password: Env.get('ORACLE_PASSWORD', ''),
        database: Env.get('ORACLE_DB_NAME'),
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: true,
      debug: true,
    },
  },
}

export default databaseConfig
