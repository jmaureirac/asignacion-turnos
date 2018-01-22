'use strict';

var Horario = require('../models/horario');
var Trabajador = require('../models/trabajador');
var Evento = require('../models/evento');

function test(req, res) {
  res.status(200).send({message: 'Probando Horario'})
}


module.exports = {
  test
};
