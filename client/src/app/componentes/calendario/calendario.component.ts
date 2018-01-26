import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Trabajador } from '../../modelos/db/trabajador';
import { TrabajadorService } from '../../servicios/trabajador.service';
import { Evento } from '../../modelos/db/evento';
import { EventoService } from '../../servicios/evento.service';
import { VARIABLES, Bloque } from '../../modelos/variables';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  providers: [TrabajadorService, EventoService]
})
export class CalendarioComponent implements OnInit {
  public title:string;
  public head:string[];
  public rango_bloque:string[];

  public fechaString: string; //Fecha clickeada, llega del bloque
  public fecha:Date;
  public current_dia:string;
  public current_mes: string;

  public current_dd:number;
  public current_mm:number;
  public current_yyyy:number;

  public semana:number[];

  @Output() dataCelda = new EventEmitter<{ rango_hora:string, data:string }>();


  constructor(
    private _trabajadorService: TrabajadorService,
    private _eventoService: EventoService
  ) {
    this.title = 'Calendario';
    this.current_dia = VARIABLES.dias[new Date().getDay() - 1];
    this.current_mes = VARIABLES.meses[new Date().getMonth()];
    this.current_dd = new Date().getDate();
    this.current_mm = new Date().getMonth()+1;
    this.current_yyyy = Number(new Date().getFullYear());
    this.head = VARIABLES.head;
    this.rango_bloque = VARIABLES.rango_bloque;
    this.fecha = new Date();
    this.semana = [null,null,null,null,null];
  }

  ngOnInit() {
    this.getLunes(this.fecha);
    this.setSemana(this.semana, this.fecha);
  }

  recibirFecha(fecha: {fechaStringEvento: string}){
    this.fechaString = fecha.fechaStringEvento;
    console.log(this.fechaString);
  }

  getLunes(fecha: Date){
    var dia = fecha.getDay() || 7;
    if(dia !== 1){
      fecha.setHours(-24 * (dia - 1));
    }
    return fecha;
  }

  setSemana(semana:number[], lunes:Date){
    for(let i = 0 ; i < 5 ; i++){
      semana[i] = lunes.getDate()+i;
    }
    return semana;
  }

}
