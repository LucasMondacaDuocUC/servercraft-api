import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const RecuperarContrasenaSchema = schema.create({
  usuario: schema.object().members({
    email: schema.string({ trim: true }, [rules.required(), rules.email(), rules.maxLength(255)]),
  }),
})
