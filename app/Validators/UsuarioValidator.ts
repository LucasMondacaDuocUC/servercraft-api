import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const UsuariosStoreSchema = schema.create({
  usuario: schema.object().members({
    rut: schema.string({ trim: true }, [
      rules.required(),
      rules.maxLength(12),
      rules.regex(/^[0-9]+[-|‐]{1}[0-9kK]{1}$/),
      rules.unique({ table: 'USUARIO', column: 'rut' }),
    ]),
    nombre: schema.string({ trim: true }, [rules.required(), rules.maxLength(120)]),
    apellidos: schema.string({ trim: true }, [rules.required(), rules.maxLength(50)]),
    email: schema.string({ trim: true }, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'USUARIO', column: 'email' }),
      rules.maxLength(255),
    ]),
    password: schema.string({ trim: true }, [
      rules.required(),
      rules.minLength(6),
      rules.maxLength(20),
    ]),
    telefonoContacto: schema.string({ trim: true }, [rules.required(), rules.maxLength(20)]),
    idRol: schema.number([
      rules.required(),
      rules.unsigned(),
      rules.exists({ table: 'ROL', column: 'id' }),
    ]),
    idEquipo: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'EQUIPO_TRABAJO', column: 'id' }),
    ]),
  }),
})

export const UsuariosUpdateSchema = schema.create({
  usuario: schema.object().members({
    rut: schema.string.optional({ trim: true }, [
      rules.maxLength(12),
      rules.regex(/^[0-9]+[-|‐]{1}[0-9kK]{1}$/),
    ]),
    nombre: schema.string.optional({ trim: true }, [rules.maxLength(120)]),
    apellidos: schema.string.optional({ trim: true }, [rules.maxLength(50)]),
    email: schema.string.optional({ trim: true }, [rules.email(), rules.maxLength(255)]),
    telefonoContacto: schema.string.optional({ trim: true }, [rules.maxLength(20)]),
    idRol: schema.number.optional([rules.unsigned(), rules.exists({ table: 'ROL', column: 'id' })]),
    idEquipo: schema.number.optional([
      rules.unsigned(),
      rules.exists({ table: 'EQUIPO_TRABAJO', column: 'id' }),
    ]),
  }),
})

export const UsuariosUpdateContraseñaSchema = schema.create({
  usuario: schema.object().members({
    contrasenaActual: schema.string({ trim: true }, [rules.required(), rules.minLength(6)]),
    contrasenaNueva: schema.string({ trim: true }, [
      rules.required(),
      rules.minLength(6),
      rules.confirmed('confirmarContrasena'),
    ]),
    confirmarContrasena: schema.string({ trim: true }, [rules.required(), rules.minLength(6)]),
  }),
})
