import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import SistemaOperativo from 'App/Models/SistemaOperativo'

export default class SistemaOperativoSeeder extends BaseSeeder {
  public async run() {
    await SistemaOperativo.updateOrCreateMany('nombre', [
      {
        nombre: 'Windows Server',
      },
      {
        nombre: 'CentOS',
      },
      {
        nombre: 'macOS',
      },
      {
        nombre: 'Ubuntu',
      },
      {
        nombre: 'RedHat',
      },
      {
        nombre: 'Oracle Linux',
      },
      {
        nombre: 'Fedora',
      },
      {
        nombre: 'FreeBSD',
      },
    ])
  }
}
