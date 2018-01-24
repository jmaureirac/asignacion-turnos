'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventoSchema = Schema({
  name: String,
  date: String,
  block: Number,
  trabajador: { type: Schema.ObjectId, ref: 'Trabajador'},
});

module.exports = mongoose.model('Evento', EventoSchema);
