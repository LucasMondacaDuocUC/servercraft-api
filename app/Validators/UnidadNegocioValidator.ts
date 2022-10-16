import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const UnidadNegocioStoreValidator = schema.create({
  unidadNegocio: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(120)]),
  }),
})

export const UnidadNegocioUpdateValidator = schema.create({
  unidadNegocio: schema.object().members({
    nombre: schema.string.optional({ trim: true }, [rules.maxLength(120)]),
  }),
})
