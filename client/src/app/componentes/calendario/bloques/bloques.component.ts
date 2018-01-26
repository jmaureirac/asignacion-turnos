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

  @Input() current_mm;
  @Input() current_mes;
  @Input() current_yyyy;
  @Input() semana;

  @Output() fechaClickeada = new EventEmitter<{fechaStringEvento:string}>();


  constructor() {
    this.head = VARIABLES.head;
    this.rango_bloque = VARIABLES.rango_bloque;
    this.dias = VARIABLES.dias;
  }

  ngOnInit() {
    //console.log(this.semana);
  }

  onClickDataCell(rango: string, data: string, dia_semana: number){
    this.formatearFecha(rango ,data, dia_semana);
  }

  formatearFecha(rango: string, data: string, dia_semana: number){
    let fechaFormateada = `${rango} del dia ${data} ${dia_semana} de ${this.current_mes} de ${this.current_yyyy} `;
    this.emitirFecha(fechaFormateada);
  }

  emitirFecha(fechaString: string){
    this.fechaClickeada.emit({fechaStringEvento: fechaString});
  }
}
