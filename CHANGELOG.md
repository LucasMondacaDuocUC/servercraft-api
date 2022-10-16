# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.27.1](https://github.com/j-dominguezp/servercraft-api/compare/v2.27.0...v2.27.1) (2021-12-13)


### Bug Fixes

* **auditoria:** se  corrige codigo añadido por error ([67f9999](https://github.com/j-dominguezp/servercraft-api/commit/67f9999494a55dd51ccba179c77a0509d9853a65))

## [2.27.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.26.1...v2.27.0) (2021-12-13)


### Features

* **email incidentes:** nuevo email para cuando se crea un incidente para notificar al responsable ([431f6ae](https://github.com/j-dominguezp/servercraft-api/commit/431f6aeb098556685256e3065eb374ee8cf95d8c))
* **incidentes:** cuando un incidente se elimina la instancia vuelve al estado operativo ([bccaf3f](https://github.com/j-dominguezp/servercraft-api/commit/bccaf3f5bc418407c9c82aceb4090ee59d536b53))


### Bug Fixes

* **auditoria:** se ordenan eventos del mas reciente al mas antiguo ([f95890f](https://github.com/j-dominguezp/servercraft-api/commit/f95890f664c88b15b949674e835ac2c568f9c084))
* **incidente mail:** correcciones de diseño ([1c609b7](https://github.com/j-dominguezp/servercraft-api/commit/1c609b74ce27d4ea18faf4e9560f83e24bd9610c))

### [2.26.1](https://github.com/j-dominguezp/servercraft-api/compare/v2.26.0...v2.26.1) (2021-12-11)


### Bug Fixes

* **incidentes:** en actualizacion de estados se actualizai instancia ([86f4a41](https://github.com/j-dominguezp/servercraft-api/commit/86f4a4116c089834e1b38f3df2190af5c2298109))
* **sistemas operativos:** se corrige seeder de so ([85ce722](https://github.com/j-dominguezp/servercraft-api/commit/85ce722442cd2d47988522c0abf9dae7e142ed75))

## [2.26.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.25.0...v2.26.0) (2021-12-11)


### Features

* **sistemas operativos:** se añade seeder para ofrecer mayor cantidad de elementos disponibles ([32304c0](https://github.com/j-dominguezp/servercraft-api/commit/32304c01474b5083970ceade3596e802989c180e))

## [2.25.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.24.4...v2.25.0) (2021-12-11)


### Features

* **incidentes:** cuando el estado del incidente cambia, se actualiza el estado de la instancia ([75bee09](https://github.com/j-dominguezp/servercraft-api/commit/75bee09a123ea4b7c44bf6ed8fef7b8f07c037ba))

### [2.24.4](https://github.com/j-dominguezp/servercraft-api/compare/v2.24.3...v2.24.4) (2021-12-10)


### Bug Fixes

* **racks:** se corrige actualizacion de descripcion ([56949a7](https://github.com/j-dominguezp/servercraft-api/commit/56949a72667874cb0a7eea2671e32d9a9ea417e2))

### [2.24.3](https://github.com/j-dominguezp/servercraft-api/compare/v2.24.2...v2.24.3) (2021-12-10)


### Bug Fixes

* **incidentes:** se corrige orden en listado de incidentes ([77d1d58](https://github.com/j-dominguezp/servercraft-api/commit/77d1d58d2c1ef5066f0d8629d84e93ffd3457de9))

### [2.24.2](https://github.com/j-dominguezp/servercraft-api/compare/v2.24.1...v2.24.2) (2021-12-10)


### Bug Fixes

* **incidente:** se corrige vinculacion del incidente con el sistema ([a9af493](https://github.com/j-dominguezp/servercraft-api/commit/a9af493a69f7841c816ff460cdfe476be15af25f))

### [2.24.1](https://github.com/j-dominguezp/servercraft-api/compare/v2.24.0...v2.24.1) (2021-12-10)


### Bug Fixes

* **incidentes:** se corrige clave foranea para creacion de incidentes ([2c6938d](https://github.com/j-dominguezp/servercraft-api/commit/2c6938d4b07ebd54018e3ef2a1a030d435f83d2b))

## [2.24.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.23.1...v2.24.0) (2021-12-09)


### Features

* **proveedores:** se añade filtro para obtener solo a proveedores  con equipos de trabajo ([0573787](https://github.com/j-dominguezp/servercraft-api/commit/05737872c67c6bafbf34e306610f1299ea67bb50))


### Others

* **npm packages:** se actualizan dependencias a ultima version ([c2e3625](https://github.com/j-dominguezp/servercraft-api/commit/c2e36255fb3454e217f9550887db7bf40f18b7e7))

### [2.23.1](https://github.com/j-dominguezp/servercraft-api/compare/v2.23.0...v2.23.1) (2021-12-09)


### Bug Fixes

* **routes:** solucion para pequeño error en la ruta del metodo ([f7d584a](https://github.com/j-dominguezp/servercraft-api/commit/f7d584a91e5724140b79d710b7cb29e629fb2713))

## [2.23.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.22.3...v2.23.0) (2021-12-08)


### Features

* **estadisticas:** se agrega la estadistica de cantidad de Usuarios por Rol ([fc242f5](https://github.com/j-dominguezp/servercraft-api/commit/fc242f5ab2748d9261a396bb9506c1d6c15b058f))
* **estadisticas:** se cambio el kpi por uno de "nuevos sistemas mensuales" ([82931b0](https://github.com/j-dominguezp/servercraft-api/commit/82931b00eb27d35e6977e84c2ee2747e4c48ca6d))

### [2.22.3](https://github.com/j-dominguezp/servercraft-api/compare/v2.22.2...v2.22.3) (2021-12-07)


### Bug Fixes

* **sistemas:** se corrige  flujo condicional de actualizacion de instancias ([42ed376](https://github.com/j-dominguezp/servercraft-api/commit/42ed37689c78673754b4b97c79091d15e5d0f187))
* **sistemas:** se corrige actualizacion de instancias en sistemas ([ab381a5](https://github.com/j-dominguezp/servercraft-api/commit/ab381a5e8c369765a2f43cea2a6e70405699738a))

### [2.22.2](https://github.com/j-dominguezp/servercraft-api/compare/v2.22.1...v2.22.2) (2021-12-07)


### Bug Fixes

* **sistema:** se añade nueva ruta condicional para actualizacion de sistemas ([7bdf539](https://github.com/j-dominguezp/servercraft-api/commit/7bdf53924717d12a97db5340d780be724bf6fb2e))
* **sistemas:** se añade json de error en actualizacion de sistemas ([9a32bcf](https://github.com/j-dominguezp/servercraft-api/commit/9a32bcf160299f54ab9384defe064abfcccda279))
* **sistemas:** se corrige actualizacion de instancias ([63c191a](https://github.com/j-dominguezp/servercraft-api/commit/63c191a49d8e46101eed8bbbed7c7358a53b37ca))

### [2.22.1](https://github.com/j-dominguezp/servercraft-api/compare/v2.22.0...v2.22.1) (2021-12-07)


### Bug Fixes

* **sistemas:** se c orrige validador de actualizacion de instancias ([7c0679e](https://github.com/j-dominguezp/servercraft-api/commit/7c0679ef65d54083f14f440d0afbfcd8a27d353a))

## [2.22.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.21.0...v2.22.0) (2021-12-07)


### Features

* **sistemas:** se añade soporte para actualizacion  de instancias en sistemas ([e136e57](https://github.com/j-dominguezp/servercraft-api/commit/e136e57b661e9bfe294b22e7cba33519063dd06f))

## [2.21.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.20.0...v2.21.0) (2021-12-07)


### Features

* **sistemas:** se añade created_at para estadisticas ([449ce67](https://github.com/j-dominguezp/servercraft-api/commit/449ce67b631586d6d6e0cb8b57149e1adb97442c))

## [2.20.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.19.0...v2.20.0) (2021-12-06)


### Features

* **sistemas:** se añade capacidad para crear instancias en creacion de sistemas ([1213f0d](https://github.com/j-dominguezp/servercraft-api/commit/1213f0d089f275062c6fb3b19ea1d82c15722585))

## [2.19.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.18.8...v2.19.0) (2021-12-06)


### Features

* **estadisitcas:** se agrega la sentencia para obtener los datos de incidentes activos ([b800119](https://github.com/j-dominguezp/servercraft-api/commit/b800119b02b8a54f51ff79543cb687124f900c03))
* **estadistica:** se añade la funcion para el KRI sobre los tipos de incidentes ([8b86878](https://github.com/j-dominguezp/servercraft-api/commit/8b86878c1a9b015f2403d6ee51c8f4b8591bda6d))
* **kpiclientes:** se agrega consulta a base de datos de clientes nuevos ([1fa6cc4](https://github.com/j-dominguezp/servercraft-api/commit/1fa6cc4b8ed0ae8462ef6380d7e240287133da4b))


### Bug Fixes

* **estadistica:** correccion de la funcion para incidentes activos ([14ff9fe](https://github.com/j-dominguezp/servercraft-api/commit/14ff9fef0b106ada38c53d4c8e48bfa123e13605))
* **kpiclientes:** se envia error en caso fallido ([c6e0268](https://github.com/j-dominguezp/servercraft-api/commit/c6e0268ea0d53806d8a6a947025a110a85bf710c))
* **kpiclientes:** se hizo arreglo a estadisticas ([a26809e](https://github.com/j-dominguezp/servercraft-api/commit/a26809ed3ea71f8fa7de0877f3a92065c63fa8c0))

### [2.18.8](https://github.com/j-dominguezp/servercraft-api/compare/v2.18.7...v2.18.8) (2021-11-29)


### Bug Fixes

* **servidores:** se añade mas informacion al index para poder facilitar la creacion de instancias ([e9eed9c](https://github.com/j-dominguezp/servercraft-api/commit/e9eed9caee98419962536bb19b66efe96b85b125))

### [2.18.7](https://github.com/j-dominguezp/servercraft-api/compare/v2.18.6...v2.18.7) (2021-11-29)


### Bug Fixes

* **sistemas:** se añade tipo de servidor a datos cargados ([bd1bd8d](https://github.com/j-dominguezp/servercraft-api/commit/bd1bd8d13396d8cf5a7c5a39af089d856fa5d6e6))

### [2.18.6](https://github.com/j-dominguezp/servercraft-api/compare/v2.18.5...v2.18.6) (2021-11-29)


### Bug Fixes

* **sistemas:** se añade dato faltante de tipo de sevidor en instancia de sistema ([8dd09d7](https://github.com/j-dominguezp/servercraft-api/commit/8dd09d73097e5b84166f0b5865e740eaecf8909b))

### [2.18.5](https://github.com/j-dominguezp/servercraft-api/compare/v2.18.4...v2.18.5) (2021-11-29)


### Bug Fixes

* **sistemas:** se añaden datos faltantes al obtener sistema ([7c2abc9](https://github.com/j-dominguezp/servercraft-api/commit/7c2abc92867ab6e85f8e5022f4230c1f96f61813))

### [2.18.4](https://github.com/j-dominguezp/servercraft-api/compare/v2.18.3...v2.18.4) (2021-11-29)


### Bug Fixes

* **servidores:** se corrige carga de base de datos en obtencion de servidor ([b52ebcd](https://github.com/j-dominguezp/servercraft-api/commit/b52ebcdc5a5ab11197018f1139e8cfc0aaafb7cf))

### [2.18.3](https://github.com/j-dominguezp/servercraft-api/compare/v2.18.2...v2.18.3) (2021-11-28)


### Bug Fixes

* **usuario:** se corrige filtro por rol de usuario ([2469622](https://github.com/j-dominguezp/servercraft-api/commit/24696224703741e1e5916616bc0c297b14eb760a))

### [2.18.2](https://github.com/j-dominguezp/servercraft-api/compare/v2.18.1...v2.18.2) (2021-11-28)


### Bug Fixes

* **usuarios:** se añade soporte para enviar arrays en filtro de rol de usuario ([2c8ddc6](https://github.com/j-dominguezp/servercraft-api/commit/2c8ddc6f47b7bee30c0cd1af7a175a38ab273e67))

### [2.18.1](https://github.com/j-dominguezp/servercraft-api/compare/v2.18.0...v2.18.1) (2021-11-27)


### Bug Fixes

* **incidentes:** se corrige seteo de fecha y hora de solucion en actualizacion de incidente ([4b78731](https://github.com/j-dominguezp/servercraft-api/commit/4b78731ec79cceb324e5151d725ed86c2af4767c))

## [2.18.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.17.0...v2.18.0) (2021-11-27)


### Features

* **sistemas:** se añade soporte para vincular lenguajes de programacion y servicios web a sistemas ([8d898ec](https://github.com/j-dominguezp/servercraft-api/commit/8d898ec63a6decff276442da3118114dd65950a2))


### Bug Fixes

* **servidores index:** se añade objeto de base de datos a respuesta ([33403c7](https://github.com/j-dominguezp/servercraft-api/commit/33403c758b08996621d420751880821e78cf24e5))
* **sistema:** se corrige objeto en respuesta de actualizacion de sistemas ([02dabac](https://github.com/j-dominguezp/servercraft-api/commit/02dabac3c18f1f07959485946e5bed19080922a5))

## [2.17.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.16.0...v2.17.0) (2021-11-26)


### Features

* **databse:** se añade columna de fecha de creacion en clientes para KPI ([ce25340](https://github.com/j-dominguezp/servercraft-api/commit/ce2534062538a7359392a037aaeb33d3fbd4123f))
* **estadisticas:** se añade ruta y funciones basicas para ser completadas ([c3082ce](https://github.com/j-dominguezp/servercraft-api/commit/c3082cea742143f93aab9f61ac7aecd6127b0801))
* **proveedores:** se añade logica de creacion de proveedor con timestamp ([0b5f8e3](https://github.com/j-dominguezp/servercraft-api/commit/0b5f8e3aeda8ad50795a93e96ade9f8f5a15a437))

## [2.16.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.15.0...v2.16.0) (2021-11-26)


### Features

* **proveedor sistema:** se añade timestamp para creacion de cliente ([92ade98](https://github.com/j-dominguezp/servercraft-api/commit/92ade98b42635957778e5426f8f32f3311d90ead))

## [2.15.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.14.0...v2.15.0) (2021-11-26)


### Features

* **crear nueva contraseña:** se añade el metodo de crear nueva contraseña ([8e672a7](https://github.com/j-dominguezp/servercraft-api/commit/8e672a7be9f07f66776c6cb7004db34b7eefa285))
* **recuperar contraseña:** se añade generacion de token unico para autorizacion ([37e8247](https://github.com/j-dominguezp/servercraft-api/commit/37e82470c49f14061f289201ef64046acc18a288))


### Bug Fixes

* **recovery:** se modifico el asunto del correo erroneo ([cae9e09](https://github.com/j-dominguezp/servercraft-api/commit/cae9e096cba8d187e9dd18e5a50442efb579d7aa))

## [2.14.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.13.0...v2.14.0) (2021-11-19)


### Features

* **correo html:** se creo la plantilla para el correo de recuperar contraseña ([7aa8a54](https://github.com/j-dominguezp/servercraft-api/commit/7aa8a54b7b8f6a16e89c4796775cebec2f037f6b))
* **recuperar contrasena:** se añade configuracion de envio de email para recuperar contraseña ([af2073d](https://github.com/j-dominguezp/servercraft-api/commit/af2073dffe7d5cb0fff24b167357de1cb34c2199))


### Bug Fixes

* **recover email:** se modifico el templeta del correo de recuperación ([d90b4f1](https://github.com/j-dominguezp/servercraft-api/commit/d90b4f1acefe040315c5b5f4381da47b8f8bd9a0))

## [2.13.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.12.0...v2.13.0) (2021-11-19)


### Features

* **mailing:** se añaden configuraciones para envio de emails ([0997886](https://github.com/j-dominguezp/servercraft-api/commit/0997886b4bfca798c8da3db13737960f254df0ae))

## [2.12.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.11.3...v2.12.0) (2021-11-12)


### Features

* **actividad auditoria:** creación del filtro query en actividad auditoria ([4358815](https://github.com/j-dominguezp/servercraft-api/commit/43588153a31711ede7855755da02b66c1e7843dc))

### [2.11.3](https://github.com/j-dominguezp/servercraft-api/compare/v2.11.2...v2.11.3) (2021-11-11)


### Bug Fixes

* **incidente filter:** corrección variables problemas y soluciones a CamelCase ([9b4c479](https://github.com/j-dominguezp/servercraft-api/commit/9b4c47961faa6f95d76b51257ce072860ccca52f))

### [2.11.2](https://github.com/j-dominguezp/servercraft-api/compare/v2.11.1...v2.11.2) (2021-11-10)


### Bug Fixes

* **servicios:** se corrigen filtros para documentos de servicio y servicios web ([59ab844](https://github.com/j-dominguezp/servercraft-api/commit/59ab844c0d222b963c3d6aedd81ceea2543ebf4d))

### [2.11.1](https://github.com/j-dominguezp/servercraft-api/compare/v2.11.0...v2.11.1) (2021-11-09)


### Others

* **npm packages:** se actualizan las dependencias para obtener actualizaciones de seguridad ([b478693](https://github.com/j-dominguezp/servercraft-api/commit/b478693f2d873235156f61ff98d3837b1d72abab))

## [2.11.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.10.0...v2.11.0) (2021-11-09)


### Features

* **lenguajes de programacion:** se añade filtro de busqueda por texto ([78f6848](https://github.com/j-dominguezp/servercraft-api/commit/78f6848d672fe3826c45938afb68f32c31f2c20e))


### Bug Fixes

* **lenguajes de programacion:** se añade soporte para filtros en controlador de index ([2998ffc](https://github.com/j-dominguezp/servercraft-api/commit/2998ffc82fdb31beb53f2acd59d44c6f64a9ec94))

## [2.10.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.9.6...v2.10.0) (2021-11-09)


### Features

* **unidad negocio:** se añade filtro por query de texto en unidad de negocio ([d3ee8c5](https://github.com/j-dominguezp/servercraft-api/commit/d3ee8c5b1968db06d9c49e566edc6c79de2e3033))

### [2.9.6](https://github.com/j-dominguezp/servercraft-api/compare/v2.9.5...v2.9.6) (2021-11-09)


### Bug Fixes

* **equipo trabajo:** se corrige filtro por unidad de negocio ([5bc447e](https://github.com/j-dominguezp/servercraft-api/commit/5bc447e1cc06475a6d28ac30556fac0ed972905a))

### [2.9.5](https://github.com/j-dominguezp/servercraft-api/compare/v2.9.4...v2.9.5) (2021-11-09)


### Bug Fixes

* **equipo proveedor:** se corrige filtro de proveedor por id ([23b29b2](https://github.com/j-dominguezp/servercraft-api/commit/23b29b23d96e987263174da52c09071a12b5e5c9))

### [2.9.4](https://github.com/j-dominguezp/servercraft-api/compare/v2.9.3...v2.9.4) (2021-11-09)


### Bug Fixes

* **equipo trabajo:** se corrige nombre de filtro por unidad de negocio ([8d1d3b6](https://github.com/j-dominguezp/servercraft-api/commit/8d1d3b686af77054d1d71c9afa6e70b77bd18610))
* **sistemas:** se renombran funciones a camelCase para probar filtros con errores ([f70e075](https://github.com/j-dominguezp/servercraft-api/commit/f70e0755606f56cb1c7f2f7cbf01cfdaf3100180))

### [2.9.3](https://github.com/j-dominguezp/servercraft-api/compare/v2.9.2...v2.9.3) (2021-11-09)


### Bug Fixes

* **proveedor sistema:** se correge filtro por proveedor y por texto ([226a101](https://github.com/j-dominguezp/servercraft-api/commit/226a10125563fc9dce6db2be038d2574be04ce3e))
* **proveedor sistema:** se corrige filtro de busqueda por texto en proveedor sistema ([1f67c5b](https://github.com/j-dominguezp/servercraft-api/commit/1f67c5bd76bf2558a5128eb12968a54579498214))
* **sistema:** se corrige filtro de nivel de senibilidad y seguridad ([8d6814b](https://github.com/j-dominguezp/servercraft-api/commit/8d6814ba77c783f0850077a1e8098d42027bc922))

### [2.9.2](https://github.com/j-dominguezp/servercraft-api/compare/v2.9.1...v2.9.2) (2021-11-04)


### Bug Fixes

* **sistemas:** dar acceso a listado de sistema a informantes ([45e0bff](https://github.com/j-dominguezp/servercraft-api/commit/45e0bffe1dec77dc690363d53a00c150073e2a6c))

### [2.9.1](https://github.com/j-dominguezp/servercraft-api/compare/v2.9.0...v2.9.1) (2021-11-02)


### Bug Fixes

* **sistemas:** se añade usuario responsable a index de sistemas ([bbe53c3](https://github.com/j-dominguezp/servercraft-api/commit/bbe53c3e799e24c9b5bf2e56a1ca206efb433e41))

## [2.9.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.8.0...v2.9.0) (2021-11-02)


### Features

* **servicios:** se añade conteo de sistemas en donde el servicio es utilizado ([f110484](https://github.com/j-dominguezp/servercraft-api/commit/f110484bbdd02affa68b20ee8eebdae5e3ecf593))

## [2.8.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.7.0...v2.8.0) (2021-11-02)


### Features

* **bases de datos:** se añade conteo de sistemas relacionados a la BD ([6a7500c](https://github.com/j-dominguezp/servercraft-api/commit/6a7500cd303b31a4697f8d1590d94c3c4283e31e))

## [2.7.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.6.1...v2.7.0) (2021-11-02)


### Features

* **lenguajes:** se añade conteo de sistemas en los que esta el lenguaje ([e1f2046](https://github.com/j-dominguezp/servercraft-api/commit/e1f20466b916bd90dc881fd86d37ce6c98d7d4c3))

### [2.6.1](https://github.com/j-dominguezp/servercraft-api/compare/v2.6.0...v2.6.1) (2021-11-02)


### Bug Fixes

* **unidades negocio:** se corrige nombre de clave foranea entre unidades y equipos ([2d985ba](https://github.com/j-dominguezp/servercraft-api/commit/2d985babe8e59727eba705af892d452fd02941d6))

## [2.6.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.5.0...v2.6.0) (2021-11-02)


### Features

* **unidades negocio:** se añade conteo de equipos por unidad en listado ([c451bc1](https://github.com/j-dominguezp/servercraft-api/commit/c451bc1a5093802bc90673b2debe91f0e8515c3e))

## [2.5.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.4.0...v2.5.0) (2021-11-02)


### Features

* **usuarios:** se añade conteo de sistemas del usuario en listado ([1c8bf26](https://github.com/j-dominguezp/servercraft-api/commit/1c8bf2612820ff26dbf00f898a3f9f15c7f85bcb))

## [2.4.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.3.3...v2.4.0) (2021-10-31)


### Features

* **servidores:** se añade posibilidad de aceptar un arreglo de tipos en index de servidores ([95a2044](https://github.com/j-dominguezp/servercraft-api/commit/95a2044ea63248dfcf6e5e078d834498b1945a88))


### Bug Fixes

* **servidores:** se corrige validacion de largo de telefono para aceptar telefonos sin codigo pais ([9777061](https://github.com/j-dominguezp/servercraft-api/commit/97770612e279301c6dfedcf69d57074a1b832ce0))

### [2.3.3](https://github.com/j-dominguezp/servercraft-api/compare/v2.3.2...v2.3.3) (2021-10-30)


### Bug Fixes

* **incidentes:** se añade creacion de fecha y hora de solucion en cambio de estado ([1fb4be2](https://github.com/j-dominguezp/servercraft-api/commit/1fb4be2c0b03363ce558a3dcedd6173ba5247d93))

### [2.3.2](https://github.com/j-dominguezp/servercraft-api/compare/v2.3.1...v2.3.2) (2021-10-29)


### Bug Fixes

* **usuario:** se corrige modulo para actualizacion de contraseña ([de62365](https://github.com/j-dominguezp/servercraft-api/commit/de62365ae4f752b601538b2e57a94e9895bc59b2))

### [2.3.1](https://github.com/j-dominguezp/servercraft-api/compare/v2.3.0...v2.3.1) (2021-10-29)


### Bug Fixes

* **seeders:** se corrige creacion de usuarios en seeder para utilizar email como clave unica ([8cf0a49](https://github.com/j-dominguezp/servercraft-api/commit/8cf0a49b26511e59e2a474487d2636f32ef07ddc))
* **tipos de instancia:** se añade ruta para acceso a controlador ([eb7f1f1](https://github.com/j-dominguezp/servercraft-api/commit/eb7f1f143c5ba1015a8d3ec96a0ce057485153ba))

## [2.3.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.18...v2.3.0) (2021-10-29)


### Features

* **tipos de instancia:** se añade index para tipos de instancia ([c4ede39](https://github.com/j-dominguezp/servercraft-api/commit/c4ede3945f371fa7d509ba37de47e144f7b859c1))

### [2.2.18](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.17...v2.2.18) (2021-10-28)


### Bug Fixes

* **usuario:** se añade equipo de trabajo al detalle del usuario ([46d6379](https://github.com/j-dominguezp/servercraft-api/commit/46d6379883bea6c78603d3ab7621a94d9f5d95d1))

### [2.2.17](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.16...v2.2.17) (2021-10-27)


### Bug Fixes

* **usuarios:** se añade equipo de trabajo a index de usuarios ([43d739b](https://github.com/j-dominguezp/servercraft-api/commit/43d739bd1bb19d166235797c91487ce3bfaf6b55))

### [2.2.16](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.15...v2.2.16) (2021-10-26)


### Bug Fixes

* **usuario:** no validar rut como unico en actualizacion de usuario ([49bf9a1](https://github.com/j-dominguezp/servercraft-api/commit/49bf9a175d14b2487fd58df632499ff5e4a771b8))

### [2.2.15](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.14...v2.2.15) (2021-10-26)


### Bug Fixes

* **usuario:** no solicitar email unico en actualizar ([6f95873](https://github.com/j-dominguezp/servercraft-api/commit/6f95873348ebcda0c76c1c82d98704c62c76f352))

### [2.2.14](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.13...v2.2.14) (2021-10-25)


### Reverts

* Revert "fix(incidentes): se corrige generacion de fecha hora solucion #3" ([d21ad94](https://github.com/j-dominguezp/servercraft-api/commit/d21ad946134b7a0519fec11dfb22f1f5c11346e5)), closes [#3](https://github.com/j-dominguezp/servercraft-api/issues/3)

### [2.2.13](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.12...v2.2.13) (2021-10-25)


### Bug Fixes

* **incidentes:** se corrige generacion de fecha hora solucion [#3](https://github.com/j-dominguezp/servercraft-api/issues/3) ([b5bbe0a](https://github.com/j-dominguezp/servercraft-api/commit/b5bbe0acf8cc9f6a78ca4dc491b5a67cba36f8c1))

### [2.2.12](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.11...v2.2.12) (2021-10-25)


### Bug Fixes

* **incidentes:** se corrige generacion de fecha y hora de solucion [#2](https://github.com/j-dominguezp/servercraft-api/issues/2) ([26bd7b6](https://github.com/j-dominguezp/servercraft-api/commit/26bd7b66b425f9d0e9cf81f39ff3c2c0cc6698eb))

### [2.2.11](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.10...v2.2.11) (2021-10-25)


### Bug Fixes

* **incidentes:** se corrige generacion de fecha y hora de solucion ([2affcfc](https://github.com/j-dominguezp/servercraft-api/commit/2affcfcccb7b62c58a525c0286f65cf233f72468))

### [2.2.10](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.9...v2.2.10) (2021-10-25)


### Bug Fixes

* **incidentes:** se auto genera fecha y hora de solucion al actualizar ([06119bb](https://github.com/j-dominguezp/servercraft-api/commit/06119bbded89ac07c8d0439647255c32e882d46d))

### [2.2.9](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.8...v2.2.9) (2021-10-25)


### Bug Fixes

* **incidentes:** se setea formato de fecha para coincidir con oracle ([e1e7f34](https://github.com/j-dominguezp/servercraft-api/commit/e1e7f34d1520328d0e27842097b9e83e4a8c0d2d))

### [2.2.8](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.7...v2.2.8) (2021-10-25)


### Bug Fixes

* **incidentes:** se quita requerimiento de estado incidente en creacion ([3da07b3](https://github.com/j-dominguezp/servercraft-api/commit/3da07b38ea30bd73e8a7b4bfcdaae7ac8bba76db))

### [2.2.7](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.6...v2.2.7) (2021-10-25)


### Bug Fixes

* **incidentes:** se añaden mas datos al index de incidentes ([cfdc92d](https://github.com/j-dominguezp/servercraft-api/commit/cfdc92db5aade315b213c422899fc7eced97dea3))

### [2.2.6](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.5...v2.2.6) (2021-10-25)


### Bug Fixes

* **equipo trabajo:** se corrige validacion al crear equipo de trabajo ([53d6306](https://github.com/j-dominguezp/servercraft-api/commit/53d6306429fd7b6a31f4d2ecd1523d6d74550e09))

### [2.2.5](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.4...v2.2.5) (2021-10-25)


### Bug Fixes

* **incidentes:** se añade mas información acerca de los incidentes ([10520b5](https://github.com/j-dominguezp/servercraft-api/commit/10520b53ea542c5998794bb163cfe492b48246f3))

### [2.2.4](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.3...v2.2.4) (2021-10-24)


### Bug Fixes

* **sistema:** se corrige relation con niveles de sensibilidad que apuntaban a nivel seguridad ([8a7ad96](https://github.com/j-dominguezp/servercraft-api/commit/8a7ad96bb2b633934717088b7c85a6fd34bac9bc))

### [2.2.3](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.2...v2.2.3) (2021-10-24)


### Bug Fixes

* **equipos de trabajo:** se corrige validador para no solicitar emails unicos en actualizacion ([36b7724](https://github.com/j-dominguezp/servercraft-api/commit/36b77246bb7774695752f347e55a3dcaff847647))
* **proveedores:** se corrige objeto de validacion para que corresponda con modelo de datos ([64d7518](https://github.com/j-dominguezp/servercraft-api/commit/64d751832ad0aff5fe465a2820215e4ddf8c233e))

### [2.2.2](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.1...v2.2.2) (2021-10-22)


### Bug Fixes

* **regiones:** se corrige objeto retornado de "paises" a "regiones" ([34d40ec](https://github.com/j-dominguezp/servercraft-api/commit/34d40ecd15e98d86f3726ba6a1358472d7f6d57b))

### [2.2.1](https://github.com/j-dominguezp/servercraft-api/compare/v2.2.0...v2.2.1) (2021-10-22)


### Bug Fixes

* **equipos proveedor:** se corrige objeto de respuesta ([c9c6054](https://github.com/j-dominguezp/servercraft-api/commit/c9c605483aea8c5afdc9e5a78da404a2f6ce7713))

## [2.2.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.1.10...v2.2.0) (2021-10-22)


### Features

* **niveles seguridad:** se añade index ([77da6df](https://github.com/j-dominguezp/servercraft-api/commit/77da6df3a66138dab4b6e6823c8f748ff083a5c6))


### Bug Fixes

* **sistemas:** se añade usuario a obtener sistema ([753bccf](https://github.com/j-dominguezp/servercraft-api/commit/753bccf511d1419f1bd20980ae1f6c51f09a0b8b))
* **usuario:** se añade rol a index de usuario ([c274402](https://github.com/j-dominguezp/servercraft-api/commit/c274402b1367c9248249f28415de119c4f215606))

### [2.1.10](https://github.com/j-dominguezp/servercraft-api/compare/v2.1.9...v2.1.10) (2021-10-22)


### Bug Fixes

* **validators:** se corrigen elementos de los validatores para que respuestas calcen con la creacion ([77b1227](https://github.com/j-dominguezp/servercraft-api/commit/77b12275a93a8ac2bd2ef830f860588019df9054))

### [2.1.9](https://github.com/j-dominguezp/servercraft-api/compare/v2.1.8...v2.1.9) (2021-10-21)


### Bug Fixes

* **servidor:** se corrigen validaciones unique para ip en actualizar ([b96b6df](https://github.com/j-dominguezp/servercraft-api/commit/b96b6df8016fe6719a9707d21b6e827e88095eac))

### [2.1.8](https://github.com/j-dominguezp/servercraft-api/compare/v2.1.7...v2.1.8) (2021-10-20)


### Bug Fixes

* **servidor:** se quitan validaciones sin sentido. (Longitud email) ([5a08a28](https://github.com/j-dominguezp/servercraft-api/commit/5a08a28ba1554d7b5d6ab6c7f778937069db3124))

### [2.1.7](https://github.com/j-dominguezp/servercraft-api/compare/v2.1.6...v2.1.7) (2021-10-19)


### Bug Fixes

* **servidor:** se corrige campo de garantía para retornar booleano en vez de texto ([ba74674](https://github.com/j-dominguezp/servercraft-api/commit/ba746740e9179583eb640dc5ca4dca06c78ff294))

### [2.1.6](https://github.com/j-dominguezp/servercraft-api/compare/v2.1.5...v2.1.6) (2021-10-16)


### Bug Fixes

* **sistemas:** se corrige obtener sistema (relacion con niveles seguridad y sensibilidad) ([b33720c](https://github.com/j-dominguezp/servercraft-api/commit/b33720c18fc34d89fbc5209443b130ffefaaa633))

### [2.1.5](https://github.com/j-dominguezp/servercraft-api/compare/v2.1.4...v2.1.5) (2021-10-13)


### Bug Fixes

* **usuario:** se corrigen parametros para actualizacion de usuario ([3b34795](https://github.com/j-dominguezp/servercraft-api/commit/3b34795c55e01801704c8e3bd122499bf58a4faf))
* **usuarios:** se corrige politica de obtencion de informacion de usuarios ([9b8ca55](https://github.com/j-dominguezp/servercraft-api/commit/9b8ca555afccaa09a6f846008925cd126f86c049))

### [2.1.4](https://github.com/j-dominguezp/servercraft-api/compare/v2.1.3...v2.1.4) (2021-10-13)


### Bug Fixes

* **usuario:** se corrige ruta de acceso a obtencion de usuario ([87547bd](https://github.com/j-dominguezp/servercraft-api/commit/87547bd4d5412971f3067f017254fc0997e79566))

### [2.1.3](https://github.com/j-dominguezp/servercraft-api/compare/v2.1.2...v2.1.3) (2021-10-13)


### Bug Fixes

* **usuarios:** se elige valor arbitrario para obtencion de perfil ([13b74b4](https://github.com/j-dominguezp/servercraft-api/commit/13b74b45d66e4710de560fc5f7312f01ace77f8c))

### [2.1.2](https://github.com/j-dominguezp/servercraft-api/compare/v2.1.1...v2.1.2) (2021-10-13)


### Bug Fixes

* **instancias:** se corrige en modelo la clave foranea de el estado instancia ([bdea018](https://github.com/j-dominguezp/servercraft-api/commit/bdea01827388211d3e544320c47004fa0c112e8e))
* **usuario:** se corrige perfil para recibir de manera opcional el parametro ([3ec40e0](https://github.com/j-dominguezp/servercraft-api/commit/3ec40e01edc07edc424ef034e45f3dfe5c3f15ec))

### [2.1.1](https://github.com/j-dominguezp/servercraft-api/compare/v2.1.0...v2.1.1) (2021-10-12)


### Bug Fixes

* **instancias:** se corrige politica para no fallar al crear instancia ([fabf7c3](https://github.com/j-dominguezp/servercraft-api/commit/fabf7c3d9ecc3e89484aaa0ed0a8a4218e0823a6))

## [2.1.0](https://github.com/j-dominguezp/servercraft-api/compare/v2.0.0...v2.1.0) (2021-10-12)


### Features

* **cors:** enabled cors ([6b9a533](https://github.com/j-dominguezp/servercraft-api/commit/6b9a533d0b79164654ad8a15b90f0c5afbdafd5b))


### Bug Fixes

* **usuario:** sE añade rol a usuario ([65f2ddf](https://github.com/j-dominguezp/servercraft-api/commit/65f2ddf511bd71b4919d173f9463a6c27ebaf57f))

## [2.0.0](https://github.com/j-dominguezp/servercraft-api/compare/v1.3.2...v2.0.0) (2021-10-11)


### Features

* **autorizacion:** se añaden politicas de acceso segun rol ([71974a0](https://github.com/j-dominguezp/servercraft-api/commit/71974a0444c2f54e3bbebdc352cff47f6596da65))
* **base de datos:** se limitan las acciones sobre la base de datos en base a los roles ([2a3128d](https://github.com/j-dominguezp/servercraft-api/commit/2a3128dbb0707658c2b0e4f4c0fd6de6e1f85292))
* **controladores:** se añaden nuevos contraladores para estados instancia e incidentes ([1c581ae](https://github.com/j-dominguezp/servercraft-api/commit/1c581ae1f82eff44a57a33432088cc17fcf2c555))
* **global:** estandarizacion general de modelos, controladores, validadores y filtros ([0999e4b](https://github.com/j-dominguezp/servercraft-api/commit/0999e4b6edd5a5b08d00f11c7764c827ea37cda7))
* **imagenes:** se realiza conexion con bucket s3 y se creand endpoints para subdia de imagenes ([8a6f897](https://github.com/j-dominguezp/servercraft-api/commit/8a6f89767001448655fcdaca0672f3c66695c563))
* **incidentes:** se añaden nuevos campos a incidente ([9581240](https://github.com/j-dominguezp/servercraft-api/commit/9581240e013132827332c4792658ba5e569d1df6))
* **incidentes:** se limitan las acciones sobre los incidentes basado en los roles de usuario ([1489954](https://github.com/j-dominguezp/servercraft-api/commit/1489954a884527f821a49a0e7d7163cdb26b5a56))
* **instancias:** se añaden validaciones para restriccion de acceso por rol ([ec4c8c6](https://github.com/j-dominguezp/servercraft-api/commit/ec4c8c6b2cc9ed2a34bf8e28ff5496c3c8ed142f))
* **permisos:** cambios de permisos en el controlador sistema ([4e4be60](https://github.com/j-dominguezp/servercraft-api/commit/4e4be60985c574e49b6cc706455630c15149676e))
* **politicas y permisos:** creación de permisosa y politicas en los controladores designados ([67790ee](https://github.com/j-dominguezp/servercraft-api/commit/67790ee921f446ada6d7f05f7cd9446c4b246c5b))
* **salas y racks:** se añade autorizacion basada en rol ([9891c85](https://github.com/j-dominguezp/servercraft-api/commit/9891c855cbdf97130538d65fa4c8bdd31cf8ab83))
* **salas y racks:** se añaden objetos relacionados en index de salas y racks ([1c249c7](https://github.com/j-dominguezp/servercraft-api/commit/1c249c76b68e6613fbea3712e56bb2c1c1c02af7))
* **seeders:** se añaden mas usuarios para prueba ([5dd3042](https://github.com/j-dominguezp/servercraft-api/commit/5dd3042c07010f7aa1b2eb84d2d279ba859fa014))
* **servidores:** se limitan las acciones en base a roles ([0bb55fd](https://github.com/j-dominguezp/servercraft-api/commit/0bb55fd58b3ade179a1360004e069a2cd4645ff1))
* **sistemas operativos:** se limitan las acciones en base a los roles de usuario ([bf5c4c6](https://github.com/j-dominguezp/servercraft-api/commit/bf5c4c6c03bea27bab27f4115cdb3fd28317a15f))
* **tipo de servidor:** se limitan las acciones en base a roles ([85e773a](https://github.com/j-dominguezp/servercraft-api/commit/85e773a92f68ff18f57c91688a9437a1ddc0d50a))
* **ubicaciones:** se añade objetos y extras a respuestas de ubicaciones ([10c938c](https://github.com/j-dominguezp/servercraft-api/commit/10c938cc57e2336b6e474b499832bcae5403cc4d))
* **ubicaciones:** se limitan las acciones sobre las ubicaciones al rol administrador ([14153a0](https://github.com/j-dominguezp/servercraft-api/commit/14153a0a0ebedbf6ac944306a475d01018729c44))


### Bug Fixes

* **incidente:** se corrige validador para coincidir con los nuevos campos y politicas de roles ([bacf9fe](https://github.com/j-dominguezp/servercraft-api/commit/bacf9fe59e319e32acd7cc23d0c2f02962310216))
* **lenguaje programacion:** se quita atributo de imagen por innecesario ([b55661d](https://github.com/j-dominguezp/servercraft-api/commit/b55661da83eba5e6ffea9075affc9391d7151b6a))
* **politicas:** se corrige la politica de roles para usar el error 403 en caso de no cumplirse ([79343f1](https://github.com/j-dominguezp/servercraft-api/commit/79343f19dbb3601b6a2f5abe40576647296fa818))
* **salas y racks:** sE añade instruccion para serializar extras ([9f534c7](https://github.com/j-dominguezp/servercraft-api/commit/9f534c71856168e11e4c0fc306c34ba8cac5ea54))
* **sistema:** se corrigen modelos y validador para coincidir con el campo opcional ([9efefc8](https://github.com/j-dominguezp/servercraft-api/commit/9efefc8fa70892cda998c39eb791c4d4780dd602))


### Code Refactoring

* **codigo:** cambios de en los formatos de los archivos ([c12087b](https://github.com/j-dominguezp/servercraft-api/commit/c12087b5fe986ba38ace319c277fc1db49516c69))


### Build System

* **env:** se añaden variables nuevas al ejemplo ([f73130a](https://github.com/j-dominguezp/servercraft-api/commit/f73130a58e473e678e4a908d84f0f9082612e810))

### [1.3.2](https://github.com/j-dominguezp/servercraft-api/compare/v1.3.1...v1.3.2) (2021-10-08)


### Bug Fixes

* **seed:** se corrige seeder para no volver a crear un usuario si existe ([46d2f71](https://github.com/j-dominguezp/servercraft-api/commit/46d2f71cb110ac9c0bb12834b0d3a5a6c8724b8e))


### Others

* **npm:** se actualizan dependencias ([8f6bdb3](https://github.com/j-dominguezp/servercraft-api/commit/8f6bdb342b6d895894659b16e78802877418e784))

### [1.3.1](https://github.com/j-dominguezp/servercraft-api/compare/v1.3.0...v1.3.1) (2021-10-07)


### Bug Fixes

* **seeder:** correcion en comando de seed de bd ([6608757](https://github.com/j-dominguezp/servercraft-api/commit/660875756d16626082d83428ce1120cfd025776c))

## [1.3.0](https://github.com/j-dominguezp/servercraft-api/compare/v1.2.1...v1.3.0) (2021-10-07)


### Features

* **seeder:** se añade usuario por defecto en base a seeder de adonis ([f508843](https://github.com/j-dominguezp/servercraft-api/commit/f50884364408b4c78ebba1ab2e34d3f8fdd966d5))


### Bug Fixes

* **build:** se intenta solucionar la instalacion oracle en heroku ([7530b43](https://github.com/j-dominguezp/servercraft-api/commit/7530b43a5ceff0e931fc94dda411edc82d3bdbf0))
* **seeder:** se modifica la contraseña por defecto del usuario por defecto ([652eb9d](https://github.com/j-dominguezp/servercraft-api/commit/652eb9d3ad6e2344e4814245f49401360871cffb))

### [1.2.1](https://github.com/j-dominguezp/servercraft-api/compare/v1.2.0...v1.2.1) (2021-10-06)


### Bug Fixes

* **build:** se corrigen errores de compilacion ([8e60c60](https://github.com/j-dominguezp/servercraft-api/commit/8e60c602def04236b81ae6f8d68ee56836b636f3))

## 1.2.0 (2021-10-06)


### Features

* **auth:** se añade validación para login y metodo de cierre de sesion ([b9dabdf](https://github.com/j-dominguezp/servercraft-api/commit/b9dabdf8964cf41bbcb1297eaa4c0c00bab72b13))
* **base de datos:** configuración base de datos oracle ([4b9942c](https://github.com/j-dominguezp/servercraft-api/commit/4b9942cda5c81eba73a91d88bf48164141176a87))
* **bases de datos (entidad):** se añade crud, validaciones y filtros para la tabla base de datos ([275e1d9](https://github.com/j-dominguezp/servercraft-api/commit/275e1d994ce54f36adb4c61826ce06afac445a67))
* **controller:** cambio de variable ([56e6032](https://github.com/j-dominguezp/servercraft-api/commit/56e60322609657abcd808532472df814231a97b7))
* **controller:** creacion de archivo sistema para los controller ([dbed9b2](https://github.com/j-dominguezp/servercraft-api/commit/dbed9b203dbc06cb791b6c1768e9cbb43ab93ce9))
* **controller:** creacion de controladores de sensibilidad ([5319ca4](https://github.com/j-dominguezp/servercraft-api/commit/5319ca493b8ca45c5b024a9c139ac1162c5cffe9))
* **controller:** creación de login de usuario ([aff6f1b](https://github.com/j-dominguezp/servercraft-api/commit/aff6f1be608749a546c56c100051ba6baa187566))
* **crud: parte superior:** se crean crud de la parte superior de la tabla de la base de datos ([c85c0cd](https://github.com/j-dominguezp/servercraft-api/commit/c85c0cd691197655758565f5181c125e85432634))
* **database:** added new naming strategy to match tables naming ([a0e88f0](https://github.com/j-dominguezp/servercraft-api/commit/a0e88f0a550e64c198eb3a6f4989c0c9d38f31fe))
* **filter:** creacion de filtros para Documento servicio ([9a045e3](https://github.com/j-dominguezp/servercraft-api/commit/9a045e3659f600c7887e39309e23416bb0f4ae5f))
* **filters:** added config to filters package ([345b83d](https://github.com/j-dominguezp/servercraft-api/commit/345b83ddea26aa64088412085f19c64d9ded619b))
* **filtros:** cambios en el archivo sistema controller y el modelo ([5837c52](https://github.com/j-dominguezp/servercraft-api/commit/5837c52e0b5870f80a3d7037e84bd13ac25643fa))
* **filtros:** creacion de filtro para la tabla Documento sistema ([dbda9d6](https://github.com/j-dominguezp/servercraft-api/commit/dbda9d6b4867d08b6a1ac16e4271b7dec966a4e5))
* **filtros:** creacion de filtro para la tabla equipo encargados ([df306c2](https://github.com/j-dominguezp/servercraft-api/commit/df306c278a883d01e4fb7b940fe176c1e0120497))
* **filtros:** creacion de filtros para la tabla equipo de trabajo ([cc9b059](https://github.com/j-dominguezp/servercraft-api/commit/cc9b0590e4b3056a8ebf75386f9b45e4f09a14aa))
* **filtros:** creacion de filtros para la tabla proveedor de sistema ([1a45884](https://github.com/j-dominguezp/servercraft-api/commit/1a458844a43b1d07cdef51acfcd605a459eace63))
* **filtros:** creacion de filtros para la tabla Servicio web ([8b48ca4](https://github.com/j-dominguezp/servercraft-api/commit/8b48ca42d8189430c2bab2a98e0f573c4b5d6d62))
* **formato:** cambio en el formato ([e3f3221](https://github.com/j-dominguezp/servercraft-api/commit/e3f3221447956ef67c3291303640d2b9d42c79be))
* **incidentes:** se añade CRUD, validaciones y filtros avanzados ([cb3c032](https://github.com/j-dominguezp/servercraft-api/commit/cb3c0327cc7413d784034022e7c92dcd9c19d25b))
* **instancias:** se añade CRUD, filtros, validaciones y rutas ([9eefe8a](https://github.com/j-dominguezp/servercraft-api/commit/9eefe8a116b1f2ec7114d9824f5d019b43dff18e))
* **instancias:** se añaden filtros avanzados ([a787f17](https://github.com/j-dominguezp/servercraft-api/commit/a787f1762bc242242e5152bba6b8fa82cdb3de08))
* **modelos:** creación de 5 modelos ([7012d4b](https://github.com/j-dominguezp/servercraft-api/commit/7012d4bcad89e2b075c25d90e3b629f7b5ede902))
* **modelos:** se añade archivo incial del modelo sistema ([da5782e](https://github.com/j-dominguezp/servercraft-api/commit/da5782e87199fbf8a3746afc23d5144c562932a4))
* **modelos:** se añade todos los modelos relacionados a los servidores, instancias e incidentes ([71d9d71](https://github.com/j-dominguezp/servercraft-api/commit/71d9d711feb838fbf03666640e4cee78f1f16d3a))
* **modelos:** se crean archivos de la parte de arriba del modelo ([0b11e55](https://github.com/j-dominguezp/servercraft-api/commit/0b11e55a302ad96a59fd6fb577ba75100eb2609e))
* **racks:** se añade CRUD, filtros y validaciones para los Racks ([3ad9f4b](https://github.com/j-dominguezp/servercraft-api/commit/3ad9f4bce150b447f0e945fcae454d2ac5bd5441))
* **rutas:** se añade healthCheck ([b519f76](https://github.com/j-dominguezp/servercraft-api/commit/b519f763107693071b27f7d058180958f8d510fd))
* **rutas:** se añade ruta de sala y rack ([71c887d](https://github.com/j-dominguezp/servercraft-api/commit/71c887d639806b5d0f129527c6ed4aa046e50aa4))
* **rutas:** se añaden rutas para incidentes, tipo problema, tipo solucion y estado incidente ([c270fbf](https://github.com/j-dominguezp/servercraft-api/commit/c270fbf75c89ffa9c713c787289a4d7c6e3dc6ac))
* **rutas:** se añaden rutas para servidores, tipos de servidores, sistemas operativos y bases datos ([4802698](https://github.com/j-dominguezp/servercraft-api/commit/48026989f1ba59bff1df32e78fb5829cb6abd811))
* **salas:** se añade CRUD para salas de servidores ([462df91](https://github.com/j-dominguezp/servercraft-api/commit/462df91ed08a9950de7588f3cf30d8faac2da6e4))
* **servidor (entidad):** se añade CRUD de servidor, validaciones y filtros avanzados ([337411c](https://github.com/j-dominguezp/servercraft-api/commit/337411c6a346c9ba3b68975f9a40c59349ea61ec))
* **sistema operativo (entidad):** se agrega CRUD, validaciones y filtros ([c07fdc4](https://github.com/j-dominguezp/servercraft-api/commit/c07fdc491a66b5cd3b97d4b8a17d9c3d03ec91e6))
* **tipo problema:** se añade CRUD, validacion y filtros ([6bb5d9e](https://github.com/j-dominguezp/servercraft-api/commit/6bb5d9e93373b7ac171e0eee4b806b398f55dbd4))
* **tipo solucion:** se añade CRUD, validaciones y filtros ([d0a5443](https://github.com/j-dominguezp/servercraft-api/commit/d0a544350da576937619714b0067a116d6f7fa0a))
* **tipos de servidor:** se añade CRUD para tipos de servidor ([93b8ad8](https://github.com/j-dominguezp/servercraft-api/commit/93b8ad8534cadba557aff5d22354c3939a345d59))
* **ubicaciones:** se añade CRUD de paises y regiones con validaciones y filtros ([d9f8a42](https://github.com/j-dominguezp/servercraft-api/commit/d9f8a426fcd72beda6f64514d57b98edbc6115c1))
* **usuario:** se añade Obtener, Actualizar y Eliminar usuario ([faa1e65](https://github.com/j-dominguezp/servercraft-api/commit/faa1e65f1d4a8cc903781110e2df25757a755c2e))
* **usuario:** se añade ruta y metodo para actualizar contraseña ([d7f9982](https://github.com/j-dominguezp/servercraft-api/commit/d7f9982f6997c021c766b5985f9cfd68cdafc854))
* **usuario:** se añade ruta, controlador (creacion y listado), filtros y validador ([bb41054](https://github.com/j-dominguezp/servercraft-api/commit/bb41054f31ffc56248907e73ed981a5ae25b194c))


### Bug Fixes

* **auth:** se añade alter de sesion para garantizar la creacion de tokens en login ([0cd7eb8](https://github.com/j-dominguezp/servercraft-api/commit/0cd7eb8206c1441600fe4dc97a3fb00823b644ed))
* **base de datos y tipo servidor:** se quita la regla de que nombre sea unico ([b49fbcb](https://github.com/j-dominguezp/servercraft-api/commit/b49fbcba6f7ac96efaae0a3f78983832f8a72bbb))
* **build:** se corrige type checking de variable de entorno para integrar heroku ([b8d7a6e](https://github.com/j-dominguezp/servercraft-api/commit/b8d7a6e31a80c6d69a4ba5a6cb84a358c3a31b4c))
* **build:** se corrige type checking de variable de entorno para integrar heroku ([4c8db93](https://github.com/j-dominguezp/servercraft-api/commit/4c8db93f2b025d707d51d430079c166845ad468f))
* **controladores:** se elimina metodo show cuando no es necesario ([3775aff](https://github.com/j-dominguezp/servercraft-api/commit/3775aff0da5c16fe6ba817424e75e27d7e7c7e3c))
* **controller y validador:** cambios en los controladores y las validaciones de la tabla lenguaje ([b408336](https://github.com/j-dominguezp/servercraft-api/commit/b408336dff8eb5a69c010ad9517f7eb42e27dd7e))
* **general:** estandarizacion general de controladores, rutas y autenticacion ([bbcd513](https://github.com/j-dominguezp/servercraft-api/commit/bbcd513f9b26bfc235eb5dc03d3de330baab3f1a))
* **modelo:** se arreglaron errores en los modelos ([3cc5396](https://github.com/j-dominguezp/servercraft-api/commit/3cc5396663699c4829d6132c374ef8cee5c710e4))
* **modelos:** se vuelve a crear modelo con nombre mal escrito para corregirse permanentemente ([bac8ecd](https://github.com/j-dominguezp/servercraft-api/commit/bac8ecd3dd3f6cf9945d3237bde3a48bab8396c9))
* **nivel sensibilidad:** se elimina modelo con nombre mal escrito para que sea quitado de git ([8de4410](https://github.com/j-dominguezp/servercraft-api/commit/8de4410f84bd25824fc5ed33583a1d04ef667b50))
* **regiones:** se añade id Pais a validacion de regiones ([e4d62df](https://github.com/j-dominguezp/servercraft-api/commit/e4d62dfa002cea9c3b177b8003f6023d33353ccc))
* **rutas:** se corrigen rutas mal escritas ([e1cfae6](https://github.com/j-dominguezp/servercraft-api/commit/e1cfae65ead00974b9d810cd02baf187d97bf3d6))
* **sala:** se añade idRegion a validacion de salas ([3104847](https://github.com/j-dominguezp/servercraft-api/commit/3104847762892ae46a422eb7e6c7aaa558f55250))
* **salas:** se corrige el nombre del objeto en la respuesta ([c443e67](https://github.com/j-dominguezp/servercraft-api/commit/c443e6770b28e6f7c96f91ed74a2bead6c6f3bf3))
* **usuario:** se corrige filtro de texto para soportar cualquier sensiblidad de string ([1f312ac](https://github.com/j-dominguezp/servercraft-api/commit/1f312ac6939090d68c6b4c55106d6ddc4a7da5b2))
* **variables de entorno:** se añaden validaciones y type checking a variables de entorno ([5a442ed](https://github.com/j-dominguezp/servercraft-api/commit/5a442edbc94311ce4d235d225f9bb6b826817224))


### Others

* **git flow:** added commitizen and standard version config ([eeeb3bb](https://github.com/j-dominguezp/servercraft-api/commit/eeeb3bba1c903f30cfd3a300bc52079d3526b774))
* **global:** fixed end of line config forced by ide ([8ea90cb](https://github.com/j-dominguezp/servercraft-api/commit/8ea90cb994c22532fb8b6407b91ca1b5a284f9f2))
* **logger:** se añaden escucha de eventos de bd para debuguear errores de oracle ([a98039a](https://github.com/j-dominguezp/servercraft-api/commit/a98039ad7f3407e59c974aa920d17bbcc89226f5))
* **npm packages:** se agrega paquete para aplicar filtros en funciones index ([1e5f9c2](https://github.com/j-dominguezp/servercraft-api/commit/1e5f9c2fee6a926e9c67d6e2794cf7bd7675386a))
* **npm packages:** se añade argon para hashear la contraseña al crear usuario ([29da3d2](https://github.com/j-dominguezp/servercraft-api/commit/29da3d2a6a07de87813045a3064c3af3a2e73faa))
* **providers:** se eliminan imports no utilizados ([780b041](https://github.com/j-dominguezp/servercraft-api/commit/780b041846e74de857131abe963d201aa722092a))
* **release:** 1.1.0 ([5663794](https://github.com/j-dominguezp/servercraft-api/commit/566379491cac3b0495131bd5ead28d9db4c63e2e))


### Code Refactoring

* **controller y modelo:** cambios en los controladores y validaciones ([4427776](https://github.com/j-dominguezp/servercraft-api/commit/4427776ab70ae9ee6ca52504f900af3bab267d80))
* **correciones:** correciones ([079ec0f](https://github.com/j-dominguezp/servercraft-api/commit/079ec0fcd8449ae8051a84e4ed35a441def03d31))
* **modelo:** cambio del atributo contraseña a contrasena en la tabla usuario ([2fb6586](https://github.com/j-dominguezp/servercraft-api/commit/2fb6586604cde904bce1ae4f2bc2c7ed25cfa45d))
* **modelo:** cambios en algunos archivos ([5789ef5](https://github.com/j-dominguezp/servercraft-api/commit/5789ef5faca10127f18f44b7823a911cdf282737))
* **modelos y validador:** cambios en los algunos archivos ([74bb277](https://github.com/j-dominguezp/servercraft-api/commit/74bb277bd1e760fb7770b89d1565065dbb9c8b3b))
* **modelos:** cambios en el formato del codigo en los modelos ([3be659b](https://github.com/j-dominguezp/servercraft-api/commit/3be659b79fa450c28748ad3c7c1bb3e69f22a72d))
* **validacion:** cambios en las validaciones ([dd6ee09](https://github.com/j-dominguezp/servercraft-api/commit/dd6ee09776f4d0987a44889d1c15aced3bef89f4))
* **validaciones:** cambios ([e9acc34](https://github.com/j-dominguezp/servercraft-api/commit/e9acc3411dc5f7f7161cd2a7c4f9bcdb347b7aa0))
* **validaciones:** cambios en los archivos de validaciones ([09929a6](https://github.com/j-dominguezp/servercraft-api/commit/09929a6c82fdfbdef3d82a46a5b57e36ab5b25e3))


### Build System

* **construccion:** sE solucionan problemas de construccion por imports y paquetes mal declarados ([481c1ea](https://github.com/j-dominguezp/servercraft-api/commit/481c1ea17a1d55b34ecce5426999677e8bc6b815))
* **heroku:** se añade proc file para integracion con heroku ([36a911a](https://github.com/j-dominguezp/servercraft-api/commit/36a911a79fc95bd1e031b1d8bb963a0c2f5423be))

## 1.1.0 (2021-09-29)

### Features

- **base de datos:** configuración base de datos oracle ([4b9942c](https://github.com/j-dominguezp/servercraft-api/commit/4b9942cda5c81eba73a91d88bf48164141176a87))
- **modelos:** creación de 5 modelos ([7012d4b](https://github.com/j-dominguezp/servercraft-api/commit/7012d4bcad89e2b075c25d90e3b629f7b5ede902))
- **rutas:** se añade healthCheck ([b519f76](https://github.com/j-dominguezp/servercraft-api/commit/b519f763107693071b27f7d058180958f8d510fd))

### Others

- **git flow:** added commitizen and standard version config ([eeeb3bb](https://github.com/j-dominguezp/servercraft-api/commit/eeeb3bba1c903f30cfd3a300bc52079d3526b774))
