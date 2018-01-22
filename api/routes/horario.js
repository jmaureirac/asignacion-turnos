'use strict';

var express = require('express');
var api = express.Router();

var HorarioController = require('../controllers/horario');

/**
 * RUTAS
 */
api.get('/prueba-horarios', HorarioController.test);


module.exports = api;
