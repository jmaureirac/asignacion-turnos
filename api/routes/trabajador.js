'use strict';

var express = require('express');
var api = express.Router();

var TrabajadorController = require('../controllers/trabajador');

/**
 * RUTAS
 */
api.get('/prueba-trabajador', TrabajadorController.test);


module.exports = api;
