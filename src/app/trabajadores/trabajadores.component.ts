import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../modelos/trabajadores.model';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

  titulo : string = 'Trabajadores';
  trabajadores : Trabajador[] = [
    new Trabajador('Lucas', 22),
  ];
  agregarTrabajador = false;

  newTrabajadorNombre: string;
  newTrabajadorEdad: number;
  trabajador: Trabajador;

  constructor() { }

  ngOnInit() {

  }

  onAgregarTrabajador(){
    this.agregarTrabajador = !this.agregarTrabajador;
  }

  onSubmit(form){
    this.trabajadores.push(new Trabajador(this.newTrabajadorNombre, this.newTrabajadorEdad));
    form.reset();
    this.agregarTrabajador = false;
  }


}
