import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const TipoSolucionSchema = schema.create({
  tipoSolucion: schema.object().members({
    nombre: schema.string({ trim: true }, [
      rules.required(),
      rules.maxLength(150),
      rules.unique({ table: 'TIPO_SOLUCION', column: 'nombre' }),
    ]),
  }),
})
