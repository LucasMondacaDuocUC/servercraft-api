import { AuthConfig } from '@ioc:Adonis/Addons/Auth'

const authConfig: AuthConfig = {
  guard: 'api',
  guards: {
    api: {
      driver: 'oat',

      tokenProvider: {
        type: 'api',
        driver: 'database',
        table: 'API_TOKEN',
        foreignKey: 'user_id',
      },

      provider: {
        driver: 'lucid',

        identifierKey: 'id',

        uids: ['email'],

        model: () => import('App/Models/Usuario'),
      },
    },
  },
}

export default authConfig
