import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ServicioWebStoreValidator = schema.create({
  servicioWeb: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(120)]),
    descripcion: schema.string({ trim: true }, [rules.required(), rules.maxLength(200)]),
  }),
})

export const ServicioWebUpdateValidator = schema.create({
  servicioWeb: schema.object().members({
    nombre: schema.string.optional({ trim: true }, [rules.maxLength(120)]),
    descripcion: schema.string.optional({ trim: true }, [rules.maxLength(200)]),
  }),
})
