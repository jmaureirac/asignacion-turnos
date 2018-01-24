import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// COMPONENTES
import { AppComponent } from './app.component';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import { BloquesComponent } from './componentes/calendario/bloques/bloques.component';
import { TrabajadoresComponent } from './componentes/trabajadores/trabajadores.component';

// SERVICIOS
import { TrabajadorService } from './servicios/trabajador.service';
import { EventoService } from './servicios/evento.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    BloquesComponent,
    TrabajadoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TrabajadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
