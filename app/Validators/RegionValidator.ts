import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const RegionStoreSchema = schema.create({
  region: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(150)]),
    idPais: schema.number([rules.required(), rules.exists({ table: 'PAIS', column: 'id' })]),
  }),
})

export const RegionUpdateSchema = schema.create({
  region: schema.object().members({
    nombre: schema.string.optional({ trim: true }, [rules.required(), rules.maxLength(150)]),
    idPais: schema.number.optional([
      rules.required(),
      rules.exists({ table: 'PAIS', column: 'id' }),
    ]),
  }),
})
