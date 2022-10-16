import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const SalaStoreSchema = schema.create({
  sala: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(150)]),
    descripcion: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    idRegion: schema.number([
      rules.required(),
      rules.unsigned(),
      rules.exists({ table: 'REGION', column: 'id' }),
    ]),
  }),
})

export const SalaUpdateSchema = schema.create({
  sala: schema.object().members({
    nombre: schema.string.optional({ trim: true }, [rules.maxLength(150)]),
    descripcion: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    idRegion: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'REGION', column: 'id' }),
    ]),
  }),
})
