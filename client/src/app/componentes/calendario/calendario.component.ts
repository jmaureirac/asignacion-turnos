import { Component, OnInit, Output } from '@angular/core';
import { Trabajador } from '../../modelos/db/trabajador';
import { TrabajadorService } from '../../servicios/trabajador.service';
import { Evento } from '../../modelos/db/evento';
import { EventoService } from '../../servicios/evento.service';
import { VARIABLES } from '../../modelos/variables';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  public dd:string;
  public aa:string;
  public yyyy:string;

  public current_d:any;
  public current_m:any;
  public current_y:any;


  constructor() {
  }

  ngOnInit() {
    console.log(VARIABLES);
  }

}
