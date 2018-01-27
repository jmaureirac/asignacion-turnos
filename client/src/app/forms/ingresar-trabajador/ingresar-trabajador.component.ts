import { Component, OnInit, Input } from '@angular/core';
import { Trabajador } from '../../modelos/db/trabajador';
import { TrabajadorService } from '../../servicios/trabajador.service';

@Component({
  selector: 'app-ingresar-trabajador',
  templateUrl: './ingresar-trabajador.component.html',
  styleUrls: ['./ingresar-trabajador.component.css']
})
export class IngresarTrabajadorComponent implements OnInit {

  public title:string;
  public trabajador: Trabajador;
  public status:string;

  @Input() trabajadores;

  constructor(private _trabajadorService: TrabajadorService) {
    this.title = 'Ingresar Trabajador';
    this.trabajador = new Trabajador("","","",null,"");
  }

  ngOnInit() {
  }


  onSubmit(form){
    this._trabajadorService.agregarTrabajador(this.trabajador).subscribe(
      response => {
        this.trabajadores.push(this.trabajador);
        this.trabajador = new Trabajador("","","",null,"");
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    )

  }



}
