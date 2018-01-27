'use strict';

var express = require('express');
var api = express.Router();

var TrabajadorController = require('../controllers/trabajador');

/**
 * RUTAS
 */
api.get('/prueba-trabajador', TrabajadorController.test);
api.post('/agregar-trabajador', TrabajadorController.agregarTrabajador);
api.get('/get-trabajadores', TrabajadorController.getTrabajadores);
api.delete('/delete-trabajador/:id', TrabajadorController.deleteTrabajador);

module.exports = api;
