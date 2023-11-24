# SemilleroBackend
 API para recibir datos del sensor DHT11 con NodeMcu ESP8266

# Introducción
El objetivo de esta API será resolver el problema de almacenamiento de datos del nodemcu ESP8266 hacia la plataforma ThingSpeak.

# Instalación
### Requisitos básicos
Deberá contar con los siguientes paquetes:
- [NodeJs](https://nodejs.org/en) 
- MySQL

# Pasos para la instalación

A continuación se detalla el proceso:

```bash
git clone https://github.com/ChristianChs/SemilleroBackend.git
cd SemilleroBackend
npm install
```

Definir las variables de entorno (referencia `.env.example`)
- Crear el archivo `.env` y establecer:

```js
PORT_SERVER=3001
DB_NAME='database'
DB_USER='root'
DB_PWD='root'
DB_HOST= localhost
DB_PORT=3306
DB_DIALECT = 'mysql'
TOKEN_SECRET='secret'
```


Ejecutar el proyecto
```bash
npm run start
```