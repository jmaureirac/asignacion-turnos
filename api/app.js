'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

/**
 * CARGAR RUTAS
 */
var trabajador_routes = require('./routes/trabajador');
var horario_routes = require('./routes/horario');
var evento_routes = require('./routes/evento');

/**
 * MIDDLEWARES
 */
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/**
 * CORS
 */
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

   next();
});

/**
 * RUTAS
 */
app.use('/api', trabajador_routes);
app.use('/api', horario_routes);
app.use('/api', evento_routes);


/* Exportar modulo */
module.exports = app;
