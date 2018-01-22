'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TrabajadorSchema = Schema({
  name: String,
  edad: Number,
  email: String,
  fono: String
});

module.exports = mongoose.model('Trabajador', TrabajadorSchema);
