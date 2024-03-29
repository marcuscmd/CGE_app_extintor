import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from 'App/Models/Admin'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    const user = await User.create({
      email: 'admin@email.com',
      password: '123456',
      tipo: 'admin',
    })
    
    await Admin.create({
      nome: 'Admin',
      userId: user.id,
    })
  }
}
