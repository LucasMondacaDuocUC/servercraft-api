import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const DocumentosSistemaStoreValidator = schema.create({
  documentoSistema: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(120)]),
    url: schema.string({ trim: true }, [rules.required(), rules.maxLength(200), rules.url()]),
    idSistema: schema.number([
      rules.required(),
      rules.unsigned(),
      rules.exists({ table: 'SISTEMA', column: 'id' }),
    ]),
  }),
})

export const DocumentosSistemaUpdateValidator = schema.create({
  documentoSistema: schema.object().members({
    nombre: schema.string.optional({ trim: true }, [rules.maxLength(120)]),
    url: schema.string.optional({ trim: true }, [rules.maxLength(200), rules.url()]),
    idSistema: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'SISTEMA', column: 'id' }),
    ]),
  }),
})
