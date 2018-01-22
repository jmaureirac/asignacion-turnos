'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventoSchema = Schema({
  name: String,
  type: String
});

module.exports = mongoose.model('Evento', EventoSchema);
