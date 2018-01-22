'use strict';

var Evento = require('../models/evento');

function test(req, res) {
  res.status(200).send({message: 'Probando Eventos'})
}

module.exports = {
  test
};
