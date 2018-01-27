import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bloques } from '../../modelos/bloques.model';


@Component({
  selector: 'app-bloques',
  templateUrl: './bloques.component.html',
  styleUrls: ['./bloques.component.css']
})
export class BloquesComponent implements OnInit {

  bloques: Bloques = new Bloques(); // REFACTORIZAR CODIGO PARA SI USAR ESTA ESTRUCTURA.

  @Input() mes;
  @Input() mesVerbose;
  @Input() anho;

  @Output() fechaClickeada = new EventEmitter<{fechaStringEvento:string}>();

  constructor() {
  }

  ngOnInit() {
  }

  onClickDataCell(rango: string, data: string){
    this.formatearFecha(rango ,data);
    // console.log("Mes: " + this.mes + " Año: " + this.anho);
    // console.log("(escrito desde comoponente Bloques) Hola soy el bloque: " + rango + data );
  }

  formatearFecha(rango: string, data: string){
    let fechaFormateada = rango + " " + data + " " + this.mesVerbose + " " + this.anho;
    this.emitirFecha(fechaFormateada);
  }

  emitirFecha(fechaString: string){
    this.fechaClickeada.emit({fechaStringEvento: fechaString});
  }

}
