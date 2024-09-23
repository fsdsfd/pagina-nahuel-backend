# Inicializando el proyecto integrador etapa 4

```sh
touch server.js && npm init -y && npm i express dotenv mongoose && npm i nodemon -D
git init && touch .gitignore
touch .env .env.example
```

## Creando carpetas del proyecto

```sh
mkdir controllers models constants utils 
mkdir routers middlwares
```

## Copiamos de la página de express el "hello World"

<https://expressjs.com/es/starter/hello-world.html>

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## Modificamos el package.json

```json
  "version": "1.0.0",
  "type": "module", // agrego ESM
  "main": "server.js",
```

```json
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js" // agrego script
}
```

# Hacemos el restore del dump local en la BASE remota

```sh
mongorestore --uri "mongodb+srv://cluster-it.jslcx1i.mongodb.net/" --username mprincipe --nsInclude integrador_etapa_4.* dump
```

```sh
mongoexport --uri "mongodb+srv://cluster-it.jslcx1i.mongodb.net/" --username mprincipe --db bc_bootcamp
```

# Herramientas Administrativas

<https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.10.0.msi>

<https://www.mongodb.com/docs/database-tools/>

# Solucioanr problema de cors

<https://www.npmjs.com/package/cors>

```sh
npm i cors
```