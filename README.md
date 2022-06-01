# Ladonware

# Prueba Técnica Full-Stack Developers (CRUD)

Descripción
-------------------------
- Crear un Proyecto en Angular - y hacer una Pantalla (CRUD) basado en el diseño adjunto. Debe tener un campo de filtro para buscar por Nombre o Id de producto
- Crear un backend (En cualquier tecnología) el cuál debe exponer servicios Rest para consultar, crear, actualizar o eliminar registros, basado en los datos para manejar inventarios de productos. El repositorio de datos puede ser una base de datos SQL, NOSQL o en Memoria, queda a discreción del desarrollador.

<img src="https://bn1301files.storage.live.com/y4mEWxt9cODcWvPrg0AIeJLPtWCnnM68noApibMQKVd_S_7renqNkPyrAqV-k4PX0dqpYk4P5nBA9VbWMUpT5kJaZ0O1lHb6SGfz20Ti9HqWVbngsFa9PNpIj4Fiftl9u_ad2ZqSMh8TdF6Nw9y7bGQyct5lGl8dyW0lYBL2-QwzZHVOyxy3nBDvHWc6dbJiimk?encodeFailures=1&width=1637&height=921" />

Entregables
-------------------------
1. Publicar en un repositorio Git(GitLab, BitBucket, Github) y enviar el acceso.
2. Documentación detallando como instalar, configurar y desplegar el proyecto. (README.md)
3. Entregar printscreen de la pantalla funcionando de manera Local (¡¡AL Final de Este Archivo!!).

Valoración
-------------------------
- Se validará la lógica para realizar los componentes a nivel del Front End
- Se validará el parecido del diseño entregado
- Se validará la lógica para almacenar, editar o eliminar los datos en el repositorio a nivel del BackEnd.

_______________________________________________________________________________
-------------------------------------------------------------------------------
# Instructivo paso a paso para la Instalación y Ejecución de Proyecto Local

Para comenzar, lo primero que debemos saber es que este proyeto esta desarrollado con 
el Stack MEAN:
  M -> MongoDB
  E -> Express
  A -> Angular
  N -> Node JS
  
  <img src="http://www.ofek.co.in/images/articlesphotos/mean.png" />
  
Por lo tanto necesitamos tener instalado en nuestros computadores inicialmente MongoDB,
Node JS y Angular.
_______________________________________________________________________________
-------------------------------------------------------------------------------
# Instalaciones Previas

____________________
## Instalación MongoDB:
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
## Instalación Node JS:
  1. Ingresamos al siguiente enlace https://nodejs.org/es/
  2. Damos clic en el botón de descargar "Actual"
  3. Ejecutamos el .exe descargado
  4. Navegamos entre el menu de instalación (Next, Install)
  5. Abrimos el CMD
  6. Ejecutamos el comando "node -v" (sin comillas) para verificar la instalación de Node JS
  7. Ejecutamos el comando "npm -v" (sin comillas) para verificar la instalación de npm
____________________
## Instalación Angular:
  1. Es requisito haber instalado previamente Node JS junto con npm
  2. Abrir el CMD
  3. Ejecutar el comando "npm install -g @angular/cli" (sin comillas)
____________________
## Instalación Git:
  1. Ingresamos al siguiente enlace https://git-scm.com/downloads
  2. Damos clic en el sistema operativo que corresponda
  3. Ejecutamos el .exe descargado
  4. Navegamos entre el menu de instalación (Next, Install)
_______________________________________________________________________________
-------------------------------------------------------------------------------
# Instalaciones y Ejecución de Proyecto Local
____________________
## Clonar Repositorio:
  1. Creamos una carpeta en el equipo donde almacenaremos el proyecto
  2. Clic derecho dentro de la caperta (en un espacio vacío)
  3. Clic en "Git Bash Here"
  4. Ejecutamos el comando "git clone https://github.com/andrespalaciovelasquez/Ladonware.git" (sin comillas)
____________________
## Ejecución del Back-End:
  1. Abrimos un CMD
  2. Nos vemos a la ruta de la carpeta donde esta almacenado el Back-End
  3. Dentro de esa ruta ejecutamos los siguientes comandos comando 
      - mongod 
      - npm i mongoose
      - node src/index.js
  4. Dejamos el CMD abierto para verificar la estabilidad de la conexión constantemente
  Nota: Se ejecuta en el puerto 4000 y expone el Rest Api en /api/products
____________________
## Ejecución del Front-End:
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

# Funcionalidades del Proyecto
A continuación se presentarán las diferentes pantallas que se han desarrollado para el aplicativo.
El aplicativo funciona con Angular Routing, se tienen dos rutas, una para la Pantalla Principal y otra para el Formulario (el mismo formulario para Añadir producto y Editar producto, se cambian los parámetros de forma dinámica).
Cada pantalla tendrá una breve explicación de su funcionamiento y utilidad.
Algunas pantallas tendrán una explicación extra, ya que he decidido implementar algunas mejoras como por ejemplo:
  - Una columna con el código del producto
  - Busqueda por Nombre, Código y Categoría
  - Entre otros

## Lista de productos (Pantalla Principal)
Al ingresar por primera vez al aplicativo nos encontramos con la siguiente pantalla:
<img src="https://bn1301files.storage.live.com/y4mP_igy55Crzp7nTS1Pry0HHUK4p35ABvx-O3jmGA9_rZLLmDX55HSn1cVrkI1vRonkAFxz6ZnO7xE_CNQGYCdD2NdM8u_uQrYIlNcud7r0KtbbzxgegoGpij88u3Llw89BqjnSCr5kMWwufxNfrWwIZTbRgw-dcoGVJIQC3Uz_qltMAxUNh3u_IAFmVKbxBpjeQMSHFgWsTnzm7uXzLdq8_AqcgDB8XX5z8KGRDnyfc4?encodeFailures=1&width=1685&height=921" />
Esta primera página la podemos considerar como el Home, el cual se esta ejecutando de manera local en el puerto 4200.
Aquí podemos observar que tenemos una tabla que cuenta con las siguientes columnas:
  - Nombre (Incluye una foto del producto, el nombre del producto y una breve descripción del mismo)
  - Código (Es un código interno que se le da al producto por ejemplo "lwz-740" de LadonWareZapatos y un número de producto)
  - Categoría (Es la categoría a la que pertenece el producto, en este he creado Zapatos, Gorras, Bolsos y Camisetas)
  - Precio (Indica el precio del producto)
  - Cantidad (Dependiente de la cantidad de productos el aplicativos nos indicará si se encuentra "En Stock", "Limitado" o "Agotado" para ello se ha programado la siguiente lógica:
    - Agotado: Aparece cuando la cantidad del producto es igual a 0
    - Limitado: Aparece cuando la cantidad del producto es mayor o igual a 1 y menor o igual que 9
    - En Stock: Aparece cuando la cantidad del producto es mayor o igual a 10)
  - Inventario (A partir de la lógica anterior muestra el mensaje correspondiente)
  - Acción (Permite Editar o Eliminar un producto)

## Filtro de productos (Pantalla Principal)
En la parte superior derecha de la pantalla principal se ha desarrollado un buscador de productos por "Nombre", "Código" y "Categoría" para facilitar al usuario encontrar un producto cuando se tiene una lista muy grande o simplemente desea ver la información de manera más precisa, para comenzar a buscar solamente debemos teclear unas cantas letras (no es necesario teclear la palabra completa) y el buscados comenzará a analizar las diferentes similitudes que encuentra de manera automática y en tiempo real.

- Filtro de busqueda por Nombre:
  <img src="https://bn1301files.storage.live.com/y4mCQvRj_4N9XR-DNEYTmNxnu9gzXc77pg5lASH3LmEbOKkeE3KVfz58E1gjZQDZdv8_x3WUVPJ_4fDXu9_yNxq7h7j2L6FYbQtwLnJI17r-6Tah1bQOb1Vucyh6_na3r7R2z3xBymvY--PP0dbSjpn8BRxEBTgrBOypykJSBiPBsm7xjEBCZRAhZceBDFqYX8VP4ydKUgHzygnUDvUUc4WUPMQ7eVr15tgTVE1UMWG6IM?encodeFailures=1&width=1682&height=921" />

- Filtro de busqueda por Código:
  <img src="https://bn1301files.storage.live.com/y4mU5SXQVLxkcWwgyicdSvGVyabSJ6hb1NQ1UsldLetVGTfdWwrCxXPIuzZrKkWjxS97WcSaYl5xStKUretgOBPwpIbR9MAzLQKrzlEgwm9IkqY_wgGa9ENqmRBkVdqEbstgMq2qsjYuJWova3My3E2BYcfn0_nFhy8S0dkK1ARAHOppPpDBNHxpJegNKMt2O1XIqSpXpyIsAM2zMMCmbwlX0yLoTKTOSYrw_LcdeXeVTk?encodeFailures=1&width=1692&height=921" />

- Filtro de busqueda por Categoría:
  <img src="https://bn1301files.storage.live.com/y4myMQKDSFTQ1khtHJfUwpTDBPAIYgf0avBopsaEqq8erG4804tx_edoaG5WefAZrsQRjJTRFxq6zT_FPt1vn7aIoB62bcCoJ6KdNjbYLFrvnhfa8YcFJiSo_tdF7M3a61q9FecNTCCYdOfMxRdp7N4_sikftG-M5k1gMgBs3qonzKtUsEUeENSrBzzEiNyYgHXYA-Pmg_jtcPZ_pA5a5AEbw5hWsX0CNb4Yo2497s8WdQ?encodeFailures=1&width=1690&height=921" />
  
## Hover de producto (Pantalla Principal)
Para facilitar al usuario la navegación en la lista de productos se ha decidido colocar una sombra al producto que se le tenga el mouse encima, esto con el fin de permitirle al usuario ubicar rápidamente las diferentes columnas de corresponden a dicho producto:

  <img src="https://bn1301files.storage.live.com/y4mJYyHuOmy2Wb5Xx71x7xH_O6cWB3IPPsfR5yIbyY5Vb7YI3_1lQYlJgDf6ki0bs0Or7DO5jewRvXalR4Gn_ahGYLQUFkz68zij8gOt4fpQ6dF860zQK4fTpxdqE6G7gXz2Lj3WoYAxfyA7ovoC8PIGRwq178Drhc4QdaWARzzHji6yKCWOrS-oSljlFTCWWiQ5DWIaFK2vBOaevC9fExm5V5OR02n9cpbxjGHebVkTqg?encodeFailures=1&width=1680&height=921" />
  
## Eliminar Producto (Pantalla Principal)
Como se puede observar, se tiene una columna llamada "Acción" la cuál nos permite tanto Editar el producto, como Eliminarlo, en este caso al dar clic en el ícono de Eliminar producto, le saldrá un mensaje de Advertencia solicitandole que confirme que sí desea eliminar ese producto, ya que es probable que haya presionado el ícono por error y no deseaba eliminarlo. Si el usuario presiona en "Cancelar" simplemente se cerrará el mensaje de Advertencia, pero si el usuario presiona "Eliminar" se eliminará definitivamente el producto e inmediatamente se verá reflejado dicho cambio en la lista de los productos:

  <img src="https://bn1301files.storage.live.com/y4mnWH3InLagHKglxd5ooZ0wzK_uknThD9v6tiDbkN8yoQMweDI58bfPjxtDegCXkUNhCzhS05qgKjUSIwqppLKMtveG4SLsZURFEWB1lpyxDsGSsGnwzNXdxJ5lOkVHGyXRYHQhvysWQy3XR7Yqtora1M0cTN1XXXd4_joga19OE26SWsod0LjYwX9dOfrSIDQZ46fhafflobvVd7dk9lfWohlR1zSQ41FrSc6vdxPuLU?encodeFailures=1&width=1685&height=921" />
  
## Editar Producto (Pantalla Principal y Formulario)
Como se puede observar, se tiene una columna llamada "Acción" la cuál nos permite tanto Editar el producto, como Eliminarlo, en este caso al dar clic en el ícono de Editar producto, además de que se cargan de manerá automática los valores actuales en los diferentes campos de formulario para proceder a modificarlo. 
Al darle clic en el botón de "Cancelar" el aplicativo nos devolverá por medio de Routing a la página principal ("/") sin hacer ningún cambio, sin embargo al realizar un cambio y darle al botón "Actualizar" aparecerá un mensaje de Felicidades en el cuál se le indica al usuario que el cambio se ha realizado de manera exitosa:

  <img src="https://bn1301files.storage.live.com/y4mmhKtNucrPfxaT31VftR4eCYJYKZtczpYjgDCgkYKKbgAJ3zd7vOcGGhqcpjzKcz3ufEK07L_GdyE02CZJVxf_ozKT3F1TMcVvhmIKxgdqlX4s4lcFsuhUSJFBF5BtVcp7XcKqWzNu8lgsBUZkeMIxL3LCVRrovpzea4ADDIvTW2rRRlJG_si___W7F829QT_xHgrRc9-VSxHRsanEfwEfxY94typsjeUtmiAZMEYyLI?encodeFailures=1&width=1684&height=921" />
  
  <img src="https://bn1301files.storage.live.com/y4m02W7MrOxBxwGVHwqPJAwV2Ixlh5G2vCLtJnZsspsGJlS7gdp8xgIL_f7nFEsdfTnrw4lm1Gb-X7poR_N_3vFXektXACL9vBljlKuMhut15a2PD7RD4FUzg-1NN1W3r17szZBnZZDIRFu6AXq9h6nsuBP7X0F2zVLsnqj4JyssKrU6Ut1MM_ejXQ3gwvQFs_XmXPDRd-3rvf6Jrz3cC5taYainLTSjB1_9NrzwpOmFfQ?encodeFailures=1&width=1685&height=921" />

## Añadir Producto (Pantalla Principal y Formulario)
En la parte superior derecha de la Pantalla Principal se encuentra un botón que dice "Añadir Producto", al presionar dicho botón el formulario, por medio de Angular Routing, nos moveremos a la ruta "/form" sin embargo el programa detecta que lo que el usuario desea realizar es Añadir un Nuevo Producto por lo cuál se generá de forma dinámica un formulario con palabras claves que hacen alusión a la Actualización de un producto y nos presentará un formulario totalmente en blanco para rellenar los campos del nuevo producto. El formulario por medio de los placeholder le brinda una idea al usuario de lo que podría ir en dicho campo. Además, por defecto el botón de "Guardar" se encuentra deshabilitado y para poder activarlo, debemos rellenar todos los campos que son obligatorios (*):

  <img src="https://bn1301files.storage.live.com/y4m8TTTsXHG8iI0HjGyA-dkQSZgjFSL-gpi2KkhH_r-VINxHgfzXUegm1W-lXtd2UaMgRHiOk5B18hXjzh1XzMM-rvumyL7ecGdb5rIel00iEpQLaVThh8cmKsChvgsRXvIg-Qv6d22Lxr3k8ZwQMFyCBig-gf0YxOfLbON5Gb64EbM_A1jKJzP1k8Q_Vk9ba0ju4wCL6gxZkYDwJISyIZO7-4ZOHUEF2wGbU7T0Tw3f70?encodeFailures=1&width=1684&height=921" />
  
  <img src="https://bn1301files.storage.live.com/y4m5pUVpqNfr8baqKPG1PdP9SnsGFivo5GdNdRchxNvZprImjZs-NIhDVx407oiesBPaUEHlKpYvyxYXSOUAMwkrtAHbhdHen9eDbrOSQqu6HKrgzbgLT0z7w7EV76mVm_xzSciA0uWul5IFZ9CPQQlovrYoH-WT9rirfXfeOySTZQ388Zl2629XyC92WsgknKNLjPbJn3y36Me7qrd3DlpyReYTUZ-0W6bgLpimEEXSBY?encodeFailures=1&width=1684&height=921" />
  
Tanto el campo de Código, Nombre y Descripción se han definivo de tipo Texto.
La Categoría se ha hecho por medio de un menú desplegable que brinda la opción de escoger entre Zapatos, Gorras, Bolsos y Camisetas.
El campo Precio y Cantidad se han definido como Numéricos para, posiblemente, en un futuro realizar operaciones matemáticas con estos datos.
Finalmente, la selección de la imágen es un campo de tipo File para obtener los diferentes parámetros del archivo.

Una vez que se hayan completado los campos requeridos para añadir el nuevo producto se habilitará el botón "Guardar" y al darle clic, el aplicativo nos mostrará un mensaje de Felicitaciones, indicando que el producto se ha creado satisfactoriamente:

  <img src="https://bn1301files.storage.live.com/y4mpLmSDF1Gkm9wTipH1uexIZ0bZEZ5yfYkBawotIU3_K8TmRdofJa_3k6yuhUozUl0rEBHL9B2QKRupS6seva02VgFXtxu1AZbMALP_i4guYMgXWX10rCYMNf5IAMYO57gX5YG60C8dxMU6SXZLXp4SWSDr1ZRKFyfachAXrBUUUrMJV9Fm8w2HUsO8gw1L-yUk9Kyy95-RjWWHTnu85mPp3JzuBhY380jAlhKfF9QVGw?encodeFailures=1&width=1684&height=921" />

En cuanto hagamos clic en el botón "Cerrar" nos enviará a la Pantalla Principal, nuevamente por Angular Routing ("/") para validar que el dato se creo correctamente y seguir explorando los diferentes productos.

  <img src="https://bn1301files.storage.live.com/y4mP_igy55Crzp7nTS1Pry0HHUK4p35ABvx-O3jmGA9_rZLLmDX55HSn1cVrkI1vRonkAFxz6ZnO7xE_CNQGYCdD2NdM8u_uQrYIlNcud7r0KtbbzxgegoGpij88u3Llw89BqjnSCr5kMWwufxNfrWwIZTbRgw-dcoGVJIQC3Uz_qltMAxUNh3u_IAFmVKbxBpjeQMSHFgWsTnzm7uXzLdq8_AqcgDB8XX5z8KGRDnyfc4?encodeFailures=1&width=1685&height=921" />
