import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioLoginComponent,
    FormularioRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
