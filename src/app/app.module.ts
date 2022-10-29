import { CrudComponent } from './componentes/crud/crud.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    CrudComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
