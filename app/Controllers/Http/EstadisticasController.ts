import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class EstadisticasController {
  public async clientesNuevos({ bouncer, response }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])
    try {
      const data = await Database.rawQuery(
        `WITH t(n) AS (SELECT 1 FROM DUAL UNION ALL SELECT n+1 FROM t WHERE n < 12) SELECT  t.n as "mes", (SELECT COUNT(p."id") as "clientes" FROM PROVEEDOR_SISTEMA p WHERE   TO_CHAR(p."created_at", 'MM') = t.n) as "clientes" FROM t`
      )

      return response.ok({
        message: 'Estadistica generada correctamente',
        status: true,
        data,
      })
    } catch (error) {
      return response.badRequest({
        message: 'Error al generar estadística',
        status: false,
        error,
      })
    }
  }

  public async sistemasNuevos({ bouncer, response }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    try {
      const data = await Database.rawQuery(
        `WITH t(n) AS (SELECT 1 FROM DUAL UNION ALL SELECT n+1 FROM t WHERE n < 12) SELECT t.n as "mes",(SELECT COUNT(p."id") as "sistemas" FROM SISTEMA p WHERE TO_CHAR(p."created_at", 'MM') = t.n) as "sistemas" FROM t`
      )

      return response.ok({
        status: true,
        message: 'Estadistica generada correctamente de Sistemas nuevos',
        data,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al generar la Estadistica de Sistemas nuevos',
        error,
      })
    }
  }

  public async incidentesActivos({ bouncer, response }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    try {
      const data = await Database.rawQuery(
        `WITH t(n) AS (SELECT 1 FROM DUAL UNION ALL SELECT n+1 FROM t WHERE n < 12) SELECT  t.n as "mes",(SELECT COUNT(i."id") as "contador" FROM INCIDENTE i WHERE i."fecha_hora_solucion" IS NULL AND TO_CHAR(i."fecha_hora_problema", 'MM') = t.n) as "contador" FROM t`
      )

      return response.ok({
        status: true,
        message: 'Estadistica generada correctamente de Incidentes Activos',
        data,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al generar la Estadistica de Incidentes Activos',
        error,
      })
    }
  }

  public async tiposIncidentes({ bouncer, response }: HttpContextContract) {
    await bouncer.with('RolesPolicy').authorize('rol', ['Administrador'])

    try {
      const data = await Database.rawQuery(
        `SELECT "nombre" AS "tipo_problema", COUNT("id_tipo_problema") AS "contador"  FROM INCIDENTE, TIPO_PROBLEMA WHERE INCIDENTE."id_tipo_problema" = TIPO_PROBLEMA."id" GROUP BY "nombre"`
      )

      return response.ok({
        status: true,
        message: 'Estadistica generada correctamente de Tipos de Incidentes',
        data,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al generar la Estadistica de Tipos de Incidentes',
        error,
      })
    }
  }
}
