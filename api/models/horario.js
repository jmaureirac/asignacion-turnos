'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HorarioSchema = Schema({
  date: String,
  block: Number,
  trabajador: { type: Schema.ObjectId, ref: 'Trabajador'},
  evento: { type: Schema.ObjectId, ref: 'Evento'}
});

module.exports = mongoose.model('Horario', HorarioSchema);
