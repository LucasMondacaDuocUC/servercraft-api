import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const TipoServidorSchema = schema.create({
  tipoServidor: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(150)]),
  }),
})
