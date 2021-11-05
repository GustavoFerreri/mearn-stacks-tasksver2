// Creamos nuestra red init con npm init --yes, el cual nos creara el package.json

// llamamos al modulo express
const express = require('express');
// llamamos el modulo morgan
const morgan = require('morgan');
// llamamos al modulo path
const path = require('path');
// traemos mongoose desde database.js
const { mongoose } = require('./database');
// creamos una instancia de express
const app = express();

// SETTINGS
// Fundamental este codigo selecciona el puerto o es por defecto o es el 5000
app.set('port', process.env.PORT || 5000)
// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');

// MIDDLEWARES
// Una vez que tenemos cargado el requerimiento morgan, lo usamos en el midleware y le colocamos un parametro dev
app.use(morgan('dev'));
// usamos dentro del midleware el json para tomar y enviar codigo en formato json
app.use(express.json());

// ROUTES
// esta es la ruta de routes, app.use(require('./routes/tasks.routes'));
// pero en este caso le colocamos una ruta en la barra de direcciones
app.use('/api/tasks', require('./routes/tasks.routes'));

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// listenining server
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});