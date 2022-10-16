import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const RackStoreSchema = schema.create({
  rack: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(150)]),
    descripcion: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    idSala: schema.number([
      rules.required(),
      rules.unsigned(),
      rules.exists({ table: 'SALA', column: 'id' }),
    ]),
  }),
})

export const RackUpdateSchema = schema.create({
  rack: schema.object().members({
    nombre: schema.string.optional({ trim: true }, [rules.maxLength(150)]),
    descripcion: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    idSala: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'SALA', column: 'id' }),
    ]),
  }),
})
