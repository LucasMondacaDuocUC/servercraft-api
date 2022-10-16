import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ProveedorSistemaStoreValidator = schema.create({
  proveedorSistema: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(120)]),
    telefonoContacto: schema.string({ trim: true }, [rules.required(), rules.maxLength(20)]),
    emailContacto: schema.string({ trim: true }, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'PROVEEDOR_SISTEMA', column: 'email_contacto' }),
      rules.maxLength(255),
    ]),
    nombreRepresentante: schema.string({ trim: true }, [rules.required(), rules.maxLength(120)]),
  }),
})

export const ProveedorSistemaUpdateValidator = schema.create({
  proveedorSistema: schema.object().members({
    nombre: schema.string.optional({ trim: true }, [rules.maxLength(120)]),
    telefonoContacto: schema.string.optional({ trim: true }, [rules.maxLength(20)]),
    emailContacto: schema.string.optional({ trim: true }, [rules.email(), rules.maxLength(255)]),
    nombreRepresentante: schema.string.optional({ trim: true }, [rules.maxLength(120)]),
  }),
})
