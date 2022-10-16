import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ActividadAuditoriaStoreValidator = schema.create({
  actividadAuditoria: schema.object().members({
    detalleActividad: schema.string({ trim: true }, [rules.required(), rules.maxLength(20)]),
    idUsuario: schema.number([
      rules.required(),
      rules.unsigned(),
      rules.exists({ table: 'USUARIO', column: 'id' }),
    ]),
  }),
})

export const ActividadAuditoriaUpdateValidator = schema.create({
  actividadAuditoria: schema.object().members({
    detalleActividad: schema.string.optional({ trim: true }, [rules.maxLength(20)]),
    idUsuario: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'USUARIO', column: 'id' }),
    ]),
  }),
})
