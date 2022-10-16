import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
  HOST: Env.schema.string({ format: 'host' }),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  APP_NAME: Env.schema.string(),
  DRIVE_DISK: Env.schema.enum(['local', 's3'] as const),
  NODE_ENV: Env.schema.enum(['development', 'production', 'testing'] as const),
  DB_CONNECTION: Env.schema.enum(['oracle'] as const),
  ORACLE_HOST: Env.schema.string(),
  ORACLE_PORT: Env.schema.number(),
  ORACLE_USER: Env.schema.string(),
  ORACLE_PASSWORD: Env.schema.string(),
  ORACLE_DB_NAME: Env.schema.string(),
  S3_KEY: Env.schema.string(),
  S3_SECRET: Env.schema.string(),
  S3_BUCKET: Env.schema.string(),
  S3_REGION: Env.schema.string(),
  S3_ENDPOINT: Env.schema.string.optional(),
  MAILGUN_API_KEY: Env.schema.string(),
  MAILGUN_DOMAIN: Env.schema.string(),
})
