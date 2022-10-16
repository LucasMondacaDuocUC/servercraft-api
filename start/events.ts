import Event from '@ioc:Adonis/Core/Event'
import Database from '@ioc:Adonis/Lucid/Database'
import Env from '@ioc:Adonis/Core/Env'

if (Env.get('NODE_ENV') === 'development') {
  Event.on('db:query', Database.prettyPrint)
}
