'use strict';

var Trabajador = require('../models/trabajador');

/**
 * FUNCIONES
 */
function test(req, res) {
  return res.status(200).send({message: 'Probando Trabajadores'});
}


function agregarTrabajador(req, res) {
  var params = req.body;
  var trabajador = new Trabajador();

  if(params.name && params.edad && params.email && params.fono){
    trabajador.name = params.name;
    trabajador.edad = params.edad;
    trabajador.email = params.email;
    trabajador.fono = params.fono;

    Trabajador.find({ $or: [
      {email: trabajador.email.toLowerCase()}
    ]}).exec((err, trabajadores) => {
      if(err) return res.status(500).send({message: 'Error en la petición'});

      if(trabajadores && trabajadores.length > 0) return res.status(404).send({message: 'Trabajador existente'});

      trabajador.save((err, trabajadorStored) => {
        if(err) return res.status(500).send({message: 'Error en la petición'});

        if(!trabajadorStored) return res.status(404).send({message: 'No se pudo guardar el trabajador'});

        return res.status(200).send({trabajador: trabajadorStored});
      });
    });
  }else{
    return res.status(200).send({message: 'Hay campos sin llenar'});
  }
}


function getTrabajadores(req, res) {
  Trabajador.find().sort('_id').exec((err, trabajadores) => {
    if(err) return res.status(500).send({message: 'Error en la petición'});

    if(!trabajadores) return res.status(404).send({message: 'No existen trabajadores'});

    return res.status(200).send({trabajadores});
  });
}

// TODO: modificar trabajador

function deleteTrabajador(req, res) {
  var trabajador_id = req.params.id;

  Trabajador.findById(trabajador_id).exec((err, trabajador)=> {
    if(err) return res.status(500).send({message: 'Error al borrar el trabajador'});

    if(!trabajador) return res.status(404).send({message: 'Trabajador no existente'});

    trabajador.remove((err) => {
      if(err) return res.status(500).send({message: 'Error al borrar el trabajador'});

      return res.status(200).send({message: 'Trabajador eliminado exitosamente'});
    })
  });

}


/**
 * EXPORTAR FUNCIONES
 */
module.exports = {
  test,
  agregarTrabajador,
  getTrabajadores,
  deleteTrabajador
};
