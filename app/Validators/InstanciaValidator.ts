import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const InstanciaSistemaStoreSchema = schema.create({
  instancia: schema.object().members({
    idTipoInstancia: schema.number([
      rules.required(),
      rules.exists({ table: 'TIPO_INSTANCIA', column: 'id' }),
    ]),
    idServidor: schema.number([
      rules.required(),
      rules.exists({ table: 'SERVIDOR', column: 'id' }),
    ]),
    idSistema: schema.number([rules.required(), rules.exists({ table: 'SISTEMA', column: 'id' })]),
    idEstadoInstancia: schema.number([
      rules.required(),
      rules.exists({ table: 'ESTADO_INSTANCIA', column: 'id' }),
    ]),
  }),
})

export const InstanciaSistemaUpdateSchema = schema.create({
  instancia: schema.object().members({
    idTipoInstancia: schema.number.optional([
      rules.exists({ table: 'TIPO_INSTANCIA', column: 'id' }),
    ]),
    idServidor: schema.number.optional([rules.exists({ table: 'SERVIDOR', column: 'id' })]),
    idSistema: schema.number.optional([rules.exists({ table: 'SISTEMA', column: 'id' })]),
    idEstadoInstancia: schema.number.optional([
      rules.exists({ table: 'ESTADO_INSTANCIA', column: 'id' }),
    ]),
  }),
})
