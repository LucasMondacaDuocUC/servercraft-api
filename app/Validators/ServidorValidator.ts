import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ServidorStoreSchema = schema.create({
  servidor: schema.object().members({
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
    ip: schema.string({ trim: true }, [
      rules.required(),
      rules.ip(),
      rules.maxLength(255),
      rules.unique({ table: 'SERVIDOR', column: 'ip' }),
    ]),
    usuarioIngreso: schema.string({ trim: true }, [rules.maxLength(30)]),
    contrasenaIngreso: schema.string({ trim: true }, [rules.maxLength(120)]),
    disco: schema.number([rules.required(), rules.unsigned()]),
    memoria: schema.number([rules.unsigned()]),
    poseeGarantia: schema.boolean([rules.required()]),
    nombreContactoMantencion: schema.string.optional({ trim: true }, [rules.maxLength(120)]),
    telefonoContactoMantencion: schema.string.optional({ trim: true }, [
      rules.minLength(9),
      rules.maxLength(12),
    ]),
    emailContactoMantencion: schema.string.optional({ trim: true }, [rules.email()]),
    idRack: schema.number([
      rules.required(),
      rules.unsigned(),
      rules.exists({ table: 'RACK', column: 'id' }),
    ]),
    idTipoServidor: schema.number([
      rules.required(),
      rules.unsigned(),
      rules.exists({ table: 'TIPO_SERVIDOR', column: 'id' }),
    ]),
    idSistemaOperativo: schema.number([
      rules.required(),
      rules.unsigned(),
      rules.exists({ table: 'SISTEMA_OPERATIVO', column: 'id' }),
    ]),
    idBaseDatos: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'BASE_DE_DATOS', column: 'id' }),
    ]),
  }),
})

export const ServidorUpdateSchema = schema.create({
  servidor: schema.object().members({
    nombre: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    ip: schema.string.optional({ trim: true }, [rules.ip(), rules.maxLength(255)]),
    usuarioIngreso: schema.string.optional({ trim: true }, [rules.maxLength(30)]),
    contrasenaIngreso: schema.string.optional({ trim: true }, [rules.maxLength(120)]),
    disco: schema.number.optional([rules.unsigned()]),
    memoria: schema.number.optional([rules.unsigned()]),
    poseeGarantia: schema.boolean.optional(),
    nombreContactoMantencion: schema.string.optional({ trim: true }, [rules.maxLength(120)]),
    telefonoContactoMantencion: schema.string.optional({ trim: true }, [
      rules.minLength(9),
      rules.maxLength(12),
    ]),
    emailContactoMantencion: schema.string.optional({ trim: true }, [rules.email()]),
    idRack: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'RACK', column: 'id' }),
    ]),
    idTipoServidor: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'TIPO_SERVIDOR', column: 'id' }),
    ]),
    idSistemaOperativo: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'SISTEMA_OPERATIVO', column: 'id' }),
    ]),
    idBaseDatos: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'BASE_DE_DATOS', column: 'id' }),
    ]),
  }),
})
