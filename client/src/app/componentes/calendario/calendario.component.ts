import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
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

  public trabajador_seleccionado: string;

  public semana:any;

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
    this.semana = [];
  }

  ngOnInit() {
    this.getLunes(this.fecha);
    this.setSemana(this.semana, this.fecha);
  }

  recibirFecha(fecha: {fechaStringEvento: string}){
    this.fechaString = JSON.parse(fecha.fechaStringEvento);
  }

  getLunes(fecha: Date){
    var dia = fecha.getDay() || 7;
    if(dia !== 1){
      fecha.setHours(-24 * (dia - 1));
    }
    return fecha;
  }

  setSemana(semana:any, lunes:Date){
    for(let i = 0 ; i < 5 ; i++){
      semana.push(lunes.toString());
      lunes.setDate(lunes.getDate()+1);
    }
    return semana;
  }

  sigSemana(){
    var diaSemanaSiguiente = new Date() // NUEVO OBJETO DATE
    var sigSemanaString = []; // PILA PARA GUARDAR NUEVOS DIAS
    for(let dia_semana of this.semana  ){ // RECORREMOS this.semana
      var date_dia_semana = new Date (dia_semana); // COMO dia_semana ES STRING LO INICALIZAMOS COMO DATE
      diaSemanaSiguiente.setDate(date_dia_semana.getDate() + 7); // COMO DATE TIENE PROPIEDAD DE SUMAR; SUMAMOS 7 DIAS
      sigSemanaString.push(diaSemanaSiguiente.toString()); // VOLVEMOS A STRING
    }
    return sigSemanaString; // RETORMANOS ARRAY CON LOS DIAS DE LA SIGUIENTE SEMANA
  }

  retrocederSemana(){
    var diaSemanaSiguiente = new Date() // NUEVO OBJETO DATE
    var sigSemanaString = []; // PILA PARA GUARDAR NUEVOS DIAS
    for(let dia_semana of this.semana  ){ // RECORREMOS this.semana
      var date_dia_semana = new Date (dia_semana); // COMO dia_semana ES STRING LO INICALIZAMOS COMO DATE
      diaSemanaSiguiente.setDate(date_dia_semana.getDate() - 7); // COMO DATE TIENE PROPIEDAD DE SUMAR; SUMAMOS 7 DIAS
      sigSemanaString.push(diaSemanaSiguiente.toString()); // VOLVEMOS A STRING
    }
    return sigSemanaString; // RETORMANOS ARRAY CON LOS DIAS DE LA SIGUIENTE SEMANA 
  }
}
