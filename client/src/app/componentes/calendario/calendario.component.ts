import { Component, OnInit, Output } from '@angular/core';
import { Trabajador } from '../../modelos/db/trabajador';
import { TrabajadorService } from '../../servicios/trabajador.service';
import { Evento } from '../../modelos/db/evento';
import { EventoService } from '../../servicios/evento.service';
import { VARIABLES } from '../../modelos/variables';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  providers: [TrabajadorService, EventoService]
})
export class CalendarioComponent implements OnInit {
  public title:string;

  public dd:string;
  public aa:string;
  public yyyy:string;

  public current_d:any;
  public current_m:any;
  public current_y:any;


  constructor(
    private _trabajadorService: TrabajadorService,
    private _eventoService: EventoService
  ) {
    this.title = 'Calendario';
    this.current_d = VARIABLES.dias[new Date().getDay() - 1];
    this.current_m = VARIABLES.meses[new Date().getMonth()];
    this.current_y = new Date().getFullYear();
  }

  ngOnInit() {
    console.log(this.current_d,this.current_m, this.current_y);
  }

}
