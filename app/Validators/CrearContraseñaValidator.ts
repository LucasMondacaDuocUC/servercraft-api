import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CrearContraseĆ±aSchema = schema.create({
  contrasenaNueva: schema.string({ trim: true }, [
    rules.required(),
    rules.minLength(6),
    rules.confirmed('confirmarNuevaContrasena'),
  ]),
  confirmarNuevaContrasena: schema.string({ trim: true }, [rules.required(), rules.minLength(6)]),
  token: schema.string({ trim: true }, [rules.required()]),
})
