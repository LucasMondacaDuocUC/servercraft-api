import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const IncidenteStoreSchema = schema.create({
  incidente: schema.object().members({
    detalleProblema: schema.string({ trim: true }, [rules.required()]),
    idTipoProblema: schema.number([
      rules.required(),
      rules.exists({ table: 'TIPO_PROBLEMA', column: 'id' }),
    ]),
    idSistema: schema.number([
      rules.required(),
      rules.exists({ table: 'INSTANCIA_SISTEMA', column: 'id' }),
    ]),
  }),
})

export const IncidenteUpdateSchema = schema.create({
  incidente: schema.object().members({
    detalleProblema: schema.string.optional({ trim: true }),
    detalleSolucion: schema.string.optional({ trim: true }),
    idTipoProblema: schema.number.optional([
      rules.exists({ table: 'TIPO_PROBLEMA', column: 'id' }),
    ]),
    idTipoSolucion: schema.number.optional([
      rules.exists({ table: 'TIPO_SOLUCION', column: 'id' }),
    ]),
    idEquipoSolucion: schema.number.optional([
      rules.exists({ table: 'EQUIPO_TRABAJO', column: 'id' }),
    ]),
    idSistema: schema.number.optional([rules.exists({ table: 'INSTANCIA_SISTEMA', column: 'id' })]),
    idEstadoIncidente: schema.number.optional([
      rules.exists({ table: 'ESTADO_INCIDENTE', column: 'id' }),
    ]),
  }),
})
