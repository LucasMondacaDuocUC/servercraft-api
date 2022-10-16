import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const SistemaOperativoSchema = schema.create({
  sistemaOperativo: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(150)]),
  }),
})
