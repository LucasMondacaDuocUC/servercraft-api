import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const TipoProblemaSchema = schema.create({
  tipoProblema: schema.object().members({
    nombre: schema.string({ trim: true }, [
      rules.required(),
      rules.maxLength(150),
      rules.unique({ table: 'TIPO_PROBLEMA', column: 'nombre' }),
    ]),
  }),
})
