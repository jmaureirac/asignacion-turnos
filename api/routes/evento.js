'use strict';

var express = require('express');
var api = express.Router();

var EventoController = require('../controllers/evento');

/**
 * RUTAS
 */
api.get('/prueba-eventos', EventoController.test);


module.exports = api;
