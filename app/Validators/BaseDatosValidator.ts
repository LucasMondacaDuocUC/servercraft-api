import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const BaseDatosSchema = schema.create({
  baseDatos: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(150)]),
  }),
})
