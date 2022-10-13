# Next.js OpenJira App
Para utilizar la aplicación localmente, se necesita inicializar la base de datos.

Se inicializa la base de datos con el comando 

```
docker-compose up -d
```

* El -d significa __detached__
  
* MongoDB URL local:

```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno

Renombrar el archivo __.env.template__ a __.env__


## Llenar la base de datos con información de pruebas

```
http://localhost:3000/api/seed

```