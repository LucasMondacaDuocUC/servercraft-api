import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Usuario from 'App/Models/Usuario'

export default class UsuarioSeeder extends BaseSeeder {
  public async run() {
    await Usuario.updateOrCreateMany('email', [
      {
        rut: '11111111-1',
        nombre: 'Administrador',
        apellidos: 'Homero',
        email: 'admin@servercraft.cl',
        password: 'servercraft',
        telefonoContacto: '912341234',
        idRolUsuario: 1,
      },
      {
        rut: '22222222-2',
        nombre: 'Responsable',
        apellidos: 'Homero',
        email: 'responsable@servercraft.cl',
        password: 'servercraft',
        telefonoContacto: '912341234',
        idRolUsuario: 2,
      },
      {
        rut: '33333333-3',
        nombre: 'Consultor',
        apellidos: 'Homero',
        email: 'consultor@servercraft.cl',
        password: 'servercraft',
        telefonoContacto: '912341234',
        idRolUsuario: 3,
      },
      {
        rut: '44444444-4',
        nombre: 'Informante',
        apellidos: 'Homero',
        email: 'informante@servercraft.cl',
        password: 'servercraft',
        telefonoContacto: '912341234',
        idRolUsuario: 4,
      },
    ])
  }
}
