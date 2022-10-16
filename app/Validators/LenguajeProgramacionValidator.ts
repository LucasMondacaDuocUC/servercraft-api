import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const LenguajeProgramacionStoreValidator = schema.create({
  lenguajeProgramacion: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(120)]),
  }),
})

export const LenguajeProgramacionUpdateValidator = schema.create({
  lenguajeProgramacion: schema.object().members({
    nombre: schema.string.optional({ trim: true }, [rules.maxLength(120)]),
  }),
})
