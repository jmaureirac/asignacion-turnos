import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { BloquesComponent } from './calendario/bloques/bloques.component';


@NgModule({
  declarations: [
    AppComponent,
    TrabajadoresComponent,
    CalendarioComponent,
    BloquesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
