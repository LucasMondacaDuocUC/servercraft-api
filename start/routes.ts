import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

// Health Check
Route.get('/health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})

// Auth
Route.group(() => {
  Route.post('/login', 'AuthController.login')
  Route.post('/logout', 'AuthController.logout').middleware('auth')
  Route.post('/recover_account', 'AuthController.recoverAccount')
  Route.post('/new_password', 'AuthController.createNewPassword')
}).prefix('/auth')

// Equipos
Route.resource('/unidad_negocio', 'UnidadesNegocioController').middleware({ '*': 'auth' }).apiOnly()
Route.resource('/equipo_trabajo', 'EquiposTrabajoController').middleware({ '*': 'auth' }).apiOnly()

// Usuario
Route.resource('/usuario', 'UsuariosController')
  .where('id', Route.matchers.number())
  .middleware({ '*': 'auth' })
  .apiOnly()
Route.put('/usuario/contrasena', 'UsuariosController.updatePassword').middleware('auth')
Route.put('/usuario/imagen', 'UsuariosController.updateImagen').middleware('auth')
Route.resource('/rol', 'RolesController').middleware({ '*': 'auth' }).apiOnly()

// Proveedores
Route.resource('/proveedor_sistema', 'ProveedoresSistemaController')
  .middleware({ '*': 'auth' })
  .apiOnly()
Route.resource('/equipo_encargado', 'EquiposEncargadosController')
  .middleware({ '*': 'auth' })
  .apiOnly()

// Ubicaciones fisicas
Route.group(() => {
  Route.resource('/pais', 'PaisesController').apiOnly()
  Route.resource('/region', 'RegionesController').apiOnly().except(['show'])
})
  .prefix('/ubicacion')
  .middleware('auth')

Route.resource('/sala', 'SalasController').middleware({ '*': 'auth' }).apiOnly()
Route.resource('/rack', 'RacksController').middleware({ '*': 'auth' }).apiOnly()

// Servidores
Route.resource('/servidor', 'ServidoresController').middleware({ '*': 'auth' }).apiOnly()
Route.resource('/base_de_datos', 'BasesDeDatosController').middleware({ '*': 'auth' }).apiOnly()
Route.resource('/tipo_servidor', 'TiposDeServidoresController')
  .middleware({ '*': 'auth' })
  .apiOnly()
Route.resource('/sistema_operativo', 'SistemasOperativosController')
  .middleware({ '*': 'auth' })
  .apiOnly()

// Instancias
Route.resource('/instancia', 'InstanciasSistemaController').middleware({ '*': 'auth' }).apiOnly()
Route.resource('/tipo_instancia', 'TiposInstanciaController').middleware({ '*': 'auth' }).apiOnly()
Route.resource('/estado_instancia', 'EstadosInstanciaController')
  .middleware({ '*': 'auth' })
  .only(['index'])

// Incidentes
Route.resource('/incidente', 'IncidentesController').middleware({ '*': 'auth' }).apiOnly()
Route.resource('/tipo_problema', 'TiposProblemaController').middleware({ '*': 'auth' }).apiOnly()
Route.resource('/tipo_solucion', 'TiposSolucionController').middleware({ '*': 'auth' }).apiOnly()
Route.resource('/estado_incidente', 'EstadosIncidenteController')
  .middleware({ '*': 'auth' })
  .only(['index'])

// Sistema
Route.resource('/sistema', 'SistemasController').middleware({ '*': 'auth' }).apiOnly()
Route.resource('/servicio_web', 'ServiciosWebController').middleware({ '*': 'auth' }).apiOnly()
Route.resource('/nivel_sensibilidad', 'NivelesSensibilidadController')
  .middleware({ '*': 'auth' })
  .apiOnly()
Route.resource('/nivel_seguridad', 'NivelesSeguridadController')
  .middleware({ '*': 'auth' })
  .apiOnly()
Route.resource('/lenguaje_programacion', 'LenguajesProgramacionController')
  .middleware({ '*': 'auth' })
  .apiOnly()
Route.resource('/documento_servicio', 'DocumentosServicioController')
  .middleware({ '*': 'auth' })
  .apiOnly()
Route.resource('/documento_sistema', 'DocumentosSistemaController')
  .middleware({ '*': 'auth' })
  .apiOnly()

// Auditoria
Route.resource('/actividad_auditoria', 'ActividadesAuditoriaController')
  .middleware({ '*': 'auth' })
  .apiOnly()

// Estadisticas
Route.group(() => {
  Route.get('/clientes', 'EstadisticasController.clientesNuevos')
  Route.get('/incidentes', 'EstadisticasController.incidentesActivos')
  Route.get('/sistemas_nuevos', 'EstadisticasController.sistemasNuevos')
  Route.get('/tipos_incidentes', 'EstadisticasController.tiposIncidentes')
}).prefix('/estadistica')
