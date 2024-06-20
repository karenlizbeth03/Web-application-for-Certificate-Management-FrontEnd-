import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { HeaderComponent } from './estructura/header/header.component';
import { CardsComponent } from './estructura/componentes/cards/cards.component';
import { ModulosComponent } from './estructura/componentes/modulos/modulos.component';
import { SearchComponent } from './estructura/componentes/search/search.component';
import { NavbarComponent } from './estructura/componentes/navbar/navbar.component';
import { FirmasComponent } from './paginas/firmas/firmas.component';
import { LoginComponent } from './paginas/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { EventosComponent } from './paginas/eventos/eventos.component';
import { ValidacionComponent } from './paginas/validacion/validacion.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { FormFirmaComponent } from './componentes/formularios/form-firma/form-firma.component';
import { FormEventComponent } from './componentes/formularios/form-event/form-event.component';
import { TablaComponent } from './componentes/formularios/tabla/tabla.component';
import { CertificadosComponent } from './paginas/certificados/certificados.component';
import { FormCertificadoComponent } from './componentes/formularios/form-certificado/form-certificado.component';
import { FormEstudianteComponent } from './componentes/formularios/form-estudiante/form-estudiante.component';
import { SeccionCertificadoComponent } from './paginas/seccion-certificado/seccion-certificado.component';
import { DesarrolladoresComponent } from './paginas/desarrolladores/desarrolladores.component';
import { VistaCertificadoComponent } from './paginas/vista-certificado/vista-certificado.component';
import { ValiddorInicoComponent } from './paginas/validdor-inico/validdor-inico.component';
import { TerminoycondicionComponent } from './paginas/terminoycondicion/terminoycondicion.component';
import { FormPlantillaComponent } from './form-plantilla/form-plantilla.component';
import { ObjecToArray } from './componentes/formularios/form-certificado/ObjecToArray';
import { PruebaComponent } from './paginas/prueba/prueba.component';
import { FormParticipanteComponent } from './componentes/formularios/form-participante/form-participante.component';
import { NotificacioComponent } from './componentes/formularios/notificacio/notificacio.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CardsComponent,
    ModulosComponent,
    SearchComponent,
    NavbarComponent,
    FirmasComponent,
    LoginComponent,
    DashboardComponent,
    EventosComponent,
    ValidacionComponent,
    InicioComponent,
    UsuariosComponent,
    FormFirmaComponent,
    FormEventComponent,
    TablaComponent,
    CertificadosComponent,
    FormCertificadoComponent,
    FormEstudianteComponent,
    SeccionCertificadoComponent,
    DesarrolladoresComponent,
    VistaCertificadoComponent,
    ValiddorInicoComponent,
    TerminoycondicionComponent,
    FormPlantillaComponent,
    ObjecToArray,
    PruebaComponent,
    FormParticipanteComponent,
    NotificacioComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
