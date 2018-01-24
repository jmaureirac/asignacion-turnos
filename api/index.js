'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

/**
 * CONEXION A BD
 */

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/asignacion-turnos')
    .then(() => {
      console.log('Conexión exitosa.');

      app.listen(port, () =>{
        console.log('Server corriendo en http://localhost:3800');
      });
    })
    .catch(err => console.log(err));
