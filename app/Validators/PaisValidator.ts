import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const PaisSchema = schema.create({
  pais: schema.object().members({
    nombre: schema.string({ trim: true }, [
      rules.required(),
      rules.maxLength(150),
      rules.unique({ table: 'PAIS', column: 'nombre' }),
    ]),
  }),
})
