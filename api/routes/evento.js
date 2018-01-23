'use strict';

var express = require('express');
var api = express.Router();

var EventoController = require('../controllers/evento');

/**
 * RUTAS
 */
api.get('/prueba-eventos', EventoController.test);
api.post('/agregar-evento', EventoController.agregarEvento);
api.get('/get-eventos-trabajador/:id', EventoController.getEventosTrabajador);

module.exports = api;
