# Ladonware
_______________________________________________________________________________
-------------------------------------------------------------------------------
                Prueba Técnica Full-Stack Developers (CRUD)
-------------------------------------------------------------------------------

Descripción
-------------------------
- Crear un Proyecto en Angular - y hacer una Pantalla (CRUD) basado en el diseño adjunto. Debe tener un campo de filtro para buscar por Nombre o Id de producto
- Crear un backend (En cualquier tecnología) el cuál debe exponer servicios Rest para consultar, crear, actualizar o eliminar registros, basado en los datos para manejar inventarios de productos. El repositorio de datos puede ser una base de datos SQL, NOSQL o en Memoria, queda a discreción del desarrollador.

Entregables
-------------------------
1. Publicar en un repositorio Git(GitLab, BitBucket, Github) y enviar el acceso.
2. Documentación detallando como instalar, configurar y desplegar el proyecto. (README.md)
3. Entregar printscreen de la pantalla funcionando de manera Local.

Valoración
-------------------------
- Se validará la lógica para realizar los componentes a nivel del Front End
- Se validará el parecido del diseño entregado
- Se validará la lógica para almacenar, editar o eliminar los datos en el repositorio a nivel del BackEnd.

_______________________________________________________________________________
-------------------------------------------------------------------------------
  Instructivo paso a paso para la Instalación y Ejecución de Proyecto Local
-------------------------------------------------------------------------------
Para comenzar, lo primero que debemos saber es que este proyeto esta desarrollado con 
el Stack MEAN:
  M -> MongoDB
  E -> Express
  A -> Angular
  N -> Node JS
Por lo tanto necesitamos tener instalado en nuestros computadores inicialmente MongoDB,
Node JS y Angular.
_______________________________________________________________________________
-------------------------------------------------------------------------------
                          Instalaciones Previas
-------------------------------------------------------------------------------
____________________
Instalación MongoDB:
  1. Ingresamos al siguiente enlace https://www.mongodb.com/try/download/community
  2. Damos clic en Download
  3. Ejecutamos el .exe descargado
  4. Navegamos entre el menu de instalación (Next, Install)
  5. Despues de instalado, debemos configurar la variable de entorno en nuestro computador
  6. Copiamos la ruta C:\Program Files\MongoDB\Server\5.0\bin
  7. Abrimos el explorador de archivos
  8. Clic derecho en "Este equipo"
  9. Clic en "Propiedades"
  10. Clic en "Configuración avazanda del sistema"
  11. Clic en "Variables de entorno..."
  12. Buscamos la "Path" en la lista de "Variables del Sistema" y damos doble clic
  13. Clic en "Nuevo"
  14. Pegamos la ruta del paso 6 
  15. Guardamos y cerramos
  16. De esta manera en el CMD ejecutamos "mongod" para inicial MongoDB
____________________
Instalación Node JS:
  1. Ingresamos al siguiente enlace https://nodejs.org/es/
  2. Damos clic en el botón de descargar "Actual"
  3. Ejecutamos el .exe descargado
  4. Navegamos entre el menu de instalación (Next, Install)
  5. Abrimos el CMD
  6. Ejecutamos el comando "node -v" (sin comillas) para verificar la instalación de Node JS
  7. Ejecutamos el comando "npm -v" (sin comillas) para verificar la instalación de npm
____________________
Instalación Angular:
  1. Es requisito haber instalado previamente Node JS junto con npm
  2. Abrir el CMD
  3. Ejecutar el comando "npm install -g @angular/cli" (sin comillas)
____________________
Instalación Git:
  1. Ingresamos al siguiente enlace https://git-scm.com/downloads
  2. Damos clic en el sistema operativo que corresponda
  3. Ejecutamos el .exe descargado
  4.  4. Navegamos entre el menu de instalación (Next, Install)
_______________________________________________________________________________
-------------------------------------------------------------------------------
                 Instalaciones y Ejecución de Proyecto Local
-------------------------------------------------------------------------------
____________________
Clonar Repositorio:
  1. Creamos una carpeta en el equipo donde almacenaremos el proyecto
  2. Clic derecho dentro de la caperta (en un espacio vacío)
  3. Clic en "Git Bash Here"
  4. Ejecutamos el comando "git clone https://github.com/andrespalaciovelasquez/Ladonware.git" (sin comillas)
____________________
Ejecución del Back-End:
  1. Abrimos un CMD
  2. Nos vemos a la ruta de la carpeta donde esta almacenado el Back-End
  3. Dentro de esa ruta ejecutamos los siguientes comandos comando 
      - mongod 
      - npm i mongoose
      - node src/index.js
  4. Dejamos el CMD abierto para verificar la estabilidad de la conexión constantemente
  Nota: Se ejecuta en el puerto 4000 y expone el Rest Api en /api/products
____________________
Ejecución del Front-End:
  1. Abrimos un nuevo CMD
  2. Nos vemos a la ruta de la carpeta donde esta almacenado el Front-End
  3. Dentro de esa ruta ejecutamos los siguientes comandos comando 
      - npm install 
      - ng serve -o
  4. Dejamos el CMD abierto para verificar la estabilidad de la conexión constantemente
  Nota: Se ejecuta en el puerto 4200
_______________________________________________________________________________
-------------------------------------------------------------------------------
De esta manera estarás ejecutando el programa de manera local y podrás utilizar 
todas las funcionalidades del mismo sin ningún problema.
  
