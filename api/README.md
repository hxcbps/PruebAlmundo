# API Rest en Node.js

Api para la prueba  fullstack  de almundo.com .

encontraremos  directorio creado con el código podemos instalar paquetes que sean necesarios.

    cd ejercicio-fullstack-mobile/api
    npm install

Se debe ejecutar de la siguiente forma:

    npm run start

### Base de datos

Se utiliza MongoDB , los datos de configuración se en encuentran .env ubicado en la raiz de la API.

los datos de conexión a esta bd ya se encuentran en el .env actual.

### Endpoints Api

Esta api fue diseñada con dos endpoints que invocan la data de base de datos, el primero devuelve una lista de hoteles  y el segundo con su id el detalle de ese hotel 

    GET http://localhost:3000/api/hotels
    GET http://localhost:3000/api/hotel/:id

**Json modelo**
```json
[
	{
      "_id": "59bd3fa39d7c8174ca3a8f77",
      "name" : "Hotel Emperador",
      "stars" : "3",
      "price" : "1596",
      "address": "Av. del Libertador 420, Buenos Aires"
	},
	{
      "_id": "59bd3fa39d7c8174ca3a8f78",
      "name" : "Hotel Medellin",
      "stars" : "4",
      "price" : "2145",
      "address": "Calle de San Bernardo, 3, Madrid"
	},
	{
      "_id": "59bd3fa39d7c8174ca3a8f79",
      "name" : "Hotel Bogota",
      "stars" : "2",
      "price" : "861",
      "address": "Calle 54 # 13-12 Bogota"
	}
]
```

**respuesta Id json*
```json
{
  "_id": "59bd3fa39d7c8174ca3a8f77",
  "name" : "Hotel Emperador",
  "stars" : "3",
  "price" : "1596",
  "address": "Av. del Libertador 420"
}
```
