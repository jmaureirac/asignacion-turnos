import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meses } from '../modelos/meses.model';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  dd: number;
  meses: Meses = new Meses();
  aaaa: number;
  semana: number;
  bis: boolean = false;
  //BORRAR VARIABLES QUE NO SE USARAN 
  añoInicio: number;
  ahora: any = new Date();
  anhoActual: number = new Date().getFullYear();
  mesActual: any = new Date().getMonth();
  mesActualVerbose: any ;

  fechaString;


  constructor() {
    this.setMesActualVerbose();
  }

  ngOnInit() {
  }

  setMesActualVerbose(){
    this.mesActualVerbose = this.meses.getNombresArray()[this.mesActual];
  }

  recivirFecha(fecha: {fechaStringEvento: string}){
    console.log("recivirFecha");
    this.fechaString = fecha.fechaStringEvento;
  }

}
