import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const DocumentoServicioStoreValidator = schema.create({
  documentoServicio: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(120)]),
    url: schema.string({ trim: true }, [rules.required(), rules.maxLength(200), rules.url()]),
    idServicioWeb: schema.number([
      rules.required(),
      rules.unsigned(),
      rules.exists({ table: 'SERVICIO_WEB', column: 'id' }),
    ]),
  }),
})

export const DocumentoServicioUpdateValidator = schema.create({
  documentoServicio: schema.object().members({
    nombre: schema.string.optional({ trim: true }, [rules.maxLength(120)]),
    url: schema.string.optional({ trim: true }, [rules.maxLength(200), rules.url()]),
    idServicioWeb: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'SERVICIO_WEB', column: 'id' }),
    ]),
  }),
})
