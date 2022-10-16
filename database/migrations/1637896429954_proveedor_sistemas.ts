import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProveedorSistemas extends BaseSchema {
  protected tableName = 'PROVEEDOR_SISTEMA'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.timestamp('created_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('created_at')
    })
  }
}
