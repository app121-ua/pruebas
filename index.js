//Importación de módulos
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConection } = require('./database/configdb');
const router = require('./routes/usuarios');

//crear una aplicación de express
const app = express();

//Llamamos a la cadena de conexión para conectar a la base de datos
dbConection();

//Uso del middleware cors en el tratamiento de rutas
app.use(cors());

//Middleware que nos permite manejar lo que nos llega en request como un JSON
app.use(express.json());

//Este comando le indica a la aplicación que de ahora en adelante,
//cualquier cosa que venga con la ruta '/api/usuarios...' lo atenderá 
//el archivo usuarios.js dentro de la carpeta routes 
app.use('/api/usuarios', require('./routes/usuarios'));

//Abrir la aplicación en el puerto 3000
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ', process.env.PORT);
});