import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const EquipoTrabajoStoreValidator = schema.create({
  equipoTrabajo: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(120)]),
    idUnidadNegocio: schema.number([
      rules.required(),
      rules.unsigned(),
      rules.exists({ table: 'UNIDAD_NEGOCIO', column: 'id' }),
    ]),
  }),
})

export const EquipoTrabaUpdateValidator = schema.create({
  equipoTrabajo: schema.object().members({
    nombre: schema.string.optional({ trim: true }, [rules.required(), rules.maxLength(120)]),
    idUnidadNegocio: schema.number.optional([rules.unsigned()]),
  }),
})
