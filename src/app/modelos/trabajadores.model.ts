import { Horario } from './horario.model';

export class Trabajador {
  public className : string;
  public horario: Horario;
  public nombre: string;
  public edad: number;

  constructor( nombre: string, edad: number  ){
    this.nombre = nombre;
    this.edad = edad;
  }

  getClassName(){
    this.className = 'Trabajadores';
    return this.className;
  }

}
