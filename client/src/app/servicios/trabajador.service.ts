import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Trabajador } from '../modelos/db/trabajador';

@Injectable()
export class TrabajadorService{
  public url:string;

  constructor(public _http: HttpClient){
    this.url = "http://localhost:3800/api/";
  }

  // METODOS

  agregarTrabajador(trabajador: Trabajador): Observable<any>{
    let params = JSON.stringify(trabajador);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'agregar-trabajador', params, {headers: headers});
  }

  getTrabajadores(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url+'get-trabajadores', {headers: headers});
  }


}
