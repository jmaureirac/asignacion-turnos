import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Evento } from '../modelos/db/evento';

@Injectable()
export class EventoService{
  public url:string;

  constructor(public _http: HttpClient){
    this.url = "http://localhost:3800/api/";
  }

  // METODOS

  agregarEvento(evento: Evento): Observable<any>{
    let params = JSON.stringify(evento);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'agregar-evento', params, {headers: headers});
  }

  getEventosTrabajador(trabajador_id: string): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'get-eventos-trabajador/'+trabajador_id, {headers: headers});
  }

}
