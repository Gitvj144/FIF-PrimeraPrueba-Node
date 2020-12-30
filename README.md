## FIF-PrimeraPrueba-Node

Aplicación desarrollada con NodeJS

### Prerequisitos

Para iniciar y probar el servicio se necesitará:

* npm v14.12.0 o superior `npm install`

### Levantar servidor de manera local

1. Ir al directorio server: `cd server`

2. Iniciar el servidor con: `node server.js`

3. Se informará el puerto de escucha en el puerto indicado, por defecto: 4000.

### Llamada a servicio en Postman

Para probar el servicio en postman se debe realizar una petición POST al endpoint:
http://localhost:4000/rent

con el siguiente body:

{
    "RUT": string,
    "NUMBER": string,
    "EMAIL": string,
    "RENT": string
}

### Obtención de archivo generado

Al recibir exitosamente una solicitud de renta en el servidor, se generará el archivo renta.txt con la información ingresada, dicho archivo se sitúa en el directorio `/renta`.