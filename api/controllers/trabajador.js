'use strict';

var Trabajador = require('../models/trabajador');

function test(req, res) {
  res.status(200).send({message: 'Probando Trabajadores'});
}

module.exports = {
  test
};
