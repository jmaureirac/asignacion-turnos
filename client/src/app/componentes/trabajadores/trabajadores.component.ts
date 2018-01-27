import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../../modelos/db/trabajador';
import { TrabajadorService } from '../../servicios/trabajador.service';
import { Evento } from '../../modelos/db/evento';
import { EventoService } from '../../servicios/evento.service';
import { VARIABLES } from '../../modelos/variables';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css'],
  providers: [TrabajadorService, EventoService]
})
export class TrabajadoresComponent implements OnInit {
  public titulo:string;
  public status:string;
  public trabajadores;
  public trabajador: Trabajador;
  public eventos;
  public nuevo:boolean;
  public agregar:string;
  public trabajador_seleccionado;

  constructor(
    private _trabajadorService: TrabajadorService,
    private _eventoService: EventoService
  ){
    this.titulo = 'Trabajadores';
    this.nuevo = false;
  }

  ngOnInit() {
    this.cargarTrabajadores();
  }


  nuevoTrabajador(){
    this.trabajador = new Trabajador("","","",null,"");
    this.nuevo = !this.nuevo;
  }

  cargarTrabajadores(){
    this._trabajadorService.getTrabajadores().subscribe(
      response => {
        if(response){
          this.trabajadores = response.trabajadores;
        }else{
          this.status = 'false';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }



}
