import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateTecnicoValidator {
  constructor(protected ctx: HttpContextContract) {}
  
  public schema = schema.create({
    nome: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(100),
    ]),

    email: schema.string({ trim: true }, [
      rules.email(),
      rules.maxLength(100),
      rules.unique({ table: 'users', column: 'email' }),
    ]),

    password: schema.string({}, [
      rules.minLength(6),
      rules.maxLength(20),
    ]),
    
    bloqueado: schema.boolean(),
  })

  
  public messages: CustomMessages = {
    required: 'O campo {{ field }} é obrigatório',
    'nome.minLength': 'O campo {{ field }} deve ter no mínimo 10 caracteres',
    'nome.maxLength': 'O campo {{ field }} deve ter no máximo 100 caracteres',
    'email.email': 'O campo {{ field }} deve ser um email válido',
    'email.maxLength': 'O campo {{ field }} deve ter no máximo 100 caracteres',
    'email.unique': 'O campo {{ field }} já está em uso',
    'password.minLength': 'O campo {{ field }} deve ter no mínimo 6 caracteres',
    'password.maxLength': 'O campo {{ field }} deve ter no máximo 20 caracteres',
  }
}
