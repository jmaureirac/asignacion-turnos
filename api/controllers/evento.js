'use strict';

var Evento = require('../models/evento');
var Trabajador = require('../models/trabajador');
var moment = require('moment');

/**
 * FUNCIONES
 */
function test(req, res) {
  return res.status(200).send({message: 'Probando Eventos'})
}


function agregarEvento(req, res) {
  var params = req.body;

  if(params.name && params.block && params.trabajador && params.day && params.month && params.year){
    var evento = new Evento();

    evento.name = params.name;
    evento.date = `${params.day}-${params.month}-${params.year}`;
    evento.block = params.block;
    evento.trabajador = params.trabajador;

    Evento.find({ $and: [
      {block: evento.block},
      {date: evento.date},
      {trabajador: evento.trabajador}
    ]}).exec((err, eventos) => {
      if(err) return res.status(500).send({message: 'Error en la petición'});

      if(eventos && eventos.length > 0) return res.status(404).send({message: 'Ya existe un evento en ese horario'});

      evento.save((err, eventoStored) => {
        if(err) return res.status(500).send({message: 'Error en la petición'});

        if(!eventoStored) return res.status(404).send({message: 'Error al guardar el horario'});

        return res.status(200).send({evento: eventoStored});
      })
    });
  }else{
    return res.status(200).send({message: 'Hay campos sin llenar'});
  }
}

function getEventosTrabajador(req, res) {
  var trabajador_id = req.params.id;

  Evento.find({trabajador: trabajador_id}).populate('trabajador', 'name email').exec((err, eventos) => {
    if(err) return res.status(500).send({message: 'Usuario inexistente'});

    if(!eventos) return res.status(404).send({message: 'No se encuentran eventos para el usuario'});

    return res.status(200).send({eventos});
  });

}

// TODO: eliminar evento - vertodos

function deleteEvento(req, res) {
  var evento_id = req.params.id;

  Evento.findById(evento_id).exec((err, evento)=> {
    if(err) return res.status(500).send({message: 'Error al borrar el evento'});

    if(!evento) return res.status(404).send({message: 'Evento no existente'});

    evento.remove((err) => {
      if(err) return res.status(500).send({message: 'Error al borrar el evento'});

      return res.status(200).send({message: 'Evento eliminado exitosamente'});
    })
  });

}




/**
 * EXPORTAR FUNCIONES
 */
module.exports = {
  test,
  agregarEvento,
  getEventosTrabajador,
  deleteEvento
};
