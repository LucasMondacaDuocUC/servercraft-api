import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const NivelSensibilidadStoreValidator = schema.create({
  nivelSensibilidad: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(120)]),
    descripcion: schema.string({ trim: true }, [rules.required(), rules.maxLength(120)]),
  }),
})

export const NivelSensibilidadUpdateValidator = schema.create({
  nivelSensibilidad: schema.object().members({
    nombre: schema.string.optional({ trim: true }, [rules.maxLength(120)]),
    descripcion: schema.string.optional({ trim: true }, [rules.maxLength(120)]),
  }),
})
