import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const SistemaStoreValidator = schema.create({
  sistema: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(120)]),

    idServidorBd: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'SERVIDOR', column: 'id' }),
    ]),
    idEquipoProveedor: schema.number([
      rules.required(),
      rules.unsigned(),
      rules.exists({ table: 'EQUIPO_ENCARGADO', column: 'id' }),
    ]),
    idNivelSeguridad: schema.number([
      rules.required(),
      rules.unsigned(),
      rules.exists({ table: 'NIVEL_SEGURIDAD', column: 'id' }),
    ]),
    idNivelSensibilidad: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'NIVEL_SENSIBILIDAD', column: 'id' }),
    ]),
    idUsuario: schema.number([
      rules.required(),
      rules.unsigned(),
      rules.exists({ table: 'USUARIO', column: 'id' }),
    ]),
    instancias: schema.array.optional().members(
      schema.object().members({
        idServidor: schema.number([
          rules.required(),
          rules.exists({ table: 'SERVIDOR', column: 'id' }),
        ]),
        idTipoInstancia: schema.number([
          rules.required(),
          rules.exists({ table: 'TIPO_INSTANCIA', column: 'id' }),
        ]),
      })
    ),
    lenguajes: schema
      .array([rules.minLength(1)])
      .members(
        schema.number([
          rules.unsigned(),
          rules.exists({ table: 'LENGUAJE_PROGRAMACION', column: 'id' }),
        ])
      ),
    serviciosWeb: schema.array
      .optional()
      .members(
        schema.number([rules.unsigned(), rules.exists({ table: 'SERVICIO_WEB', column: 'id' })])
      ),
    documentos: schema.array.optional().members(
      schema.object().members({
        nombre: schema.string({ trim: true }, [rules.required()]),
        url: schema.string({ trim: true }, [rules.required(), rules.url()]),
      })
    ),
  }),
})

export const SistemaUpdateValidator = schema.create({
  sistema: schema.object().members({
    nombre: schema.string.optional({ trim: true }, [rules.maxLength(120)]),

    idServidorBd: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'SERVIDOR', column: 'id' }),
    ]),
    idEquipoProveedor: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'EQUIPO_ENCARGADO', column: 'id' }),
    ]),
    idNivelSeguridad: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'NIVEL_SEGURIDAD', column: 'id' }),
    ]),
    idNivelSensibilidad: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'NIVEL_SENSIBILIDAD', column: 'id' }),
    ]),
    idUsuario: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'USUARIO', column: 'id' }),
    ]),
    instancias: schema.array.optional().members(
      schema.object().members({
        id: schema.number.optional([rules.exists({ table: 'INSTANCIA_SISTEMA', column: 'id' })]),
        idServidor: schema.number([
          rules.required(),
          rules.exists({ table: 'SERVIDOR', column: 'id' }),
        ]),
        idTipoInstancia: schema.number([
          rules.required(),
          rules.exists({ table: 'TIPO_INSTANCIA', column: 'id' }),
        ]),
      })
    ),
    lenguajes: schema.array
      .optional([rules.minLength(1)])
      .members(
        schema.number([
          rules.unsigned(),
          rules.exists({ table: 'LENGUAJE_PROGRAMACION', column: 'id' }),
        ])
      ),
    serviciosWeb: schema.array
      .optional()
      .members(
        schema.number([rules.unsigned(), rules.exists({ table: 'SERVICIO_WEB', column: 'id' })])
      ),
    documentos: schema.array.optional().members(
      schema.object().members({
        id: schema.number.optional([rules.exists({ table: 'DOCUMENTO_SISTEMA', column: 'id' })]),
        nombre: schema.string({ trim: true }, [rules.required()]),
        url: schema.string({ trim: true }, [rules.required(), rules.url()]),
      })
    ),
  }),
})
