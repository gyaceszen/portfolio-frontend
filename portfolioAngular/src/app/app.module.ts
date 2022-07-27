import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './misComponentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './misComponentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './misComponentes/educacion/educacion.component';
import { SkillsComponent } from './misComponentes/skills/skills.component';
import { ProyectosComponent } from './misComponentes/proyectos/proyectos.component';
import { FooterComponent } from './misComponentes/footer/footer.component';
import { ExperienciasComponent } from './misComponentes/experiencias/experiencias.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from '@auth0/auth0-angular';
import { InicioComponent } from './misComponentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    ExperienciasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-agtxkfyd.us.auth0.com',
      clientId: 'HzXI9Xry6pzlacGLFogx3NHgAqxzMNbz',
      cacheLocation: 'localstorage',
      useRefreshTokens: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
