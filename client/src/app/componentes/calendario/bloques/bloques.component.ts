import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VARIABLES, Bloque } from '../../../modelos/variables';

@Component({
  selector: 'app-bloques',
  templateUrl: './bloques.component.html',
  styleUrls: ['./bloques.component.css']
})
export class BloquesComponent implements OnInit {

  public head: string[];
  public bloque: Bloque;
  public rango_bloque: string[];
  public date = new Date().getUTCDate();
  public dias:string[];

  public fecha:any;
  public semana_parse:number[];

  @Input() current_mm;
  @Input() current_mes;
  @Input() current_yyyy;
  @Input() semana;

  @Output() fechaClickeada = new EventEmitter<{fechaStringEvento:string}>();


  constructor() {
    this.head = VARIABLES.head;
    this.rango_bloque = VARIABLES.rango_bloque;
    this.dias = VARIABLES.dias;
    this.semana_parse = [];
  }

  ngOnInit() {
    this.parseSemana(this.semana, this.semana_parse);
  }

  onClickDataCell(rango: string, bloque: number, data: string, dia_semana: number){
    this.formatearFecha(rango, bloque ,data, dia_semana);
  }

  formatearFecha(rango: string, bloque: number, data: string, dia_semana: number){
    this.fecha = {
      rango: rango,
      bloque: bloque,
      data: data,
      dia_semana: dia_semana
    }
    this.emitirFecha(JSON.stringify(this.fecha));
  }

  emitirFecha(fechaString: string){
    this.fechaClickeada.emit({fechaStringEvento: fechaString});
  }

  parseSemana(semana:string[], semana_parse:any[]){
    for(let i = 0 ; i < 5 ; i++){
      let fecha = semana[i].split(' ');
      semana_parse.push(fecha[2]);
    }
  }
}
