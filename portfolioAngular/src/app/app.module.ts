import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './misComponentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './misComponentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './misComponentes/educacion/educacion.component';
import { SkillsComponent } from './misComponentes/skills/skills.component';
import { ProyectosComponent } from './misComponentes/proyectos/proyectos.component';
import { FooterComponent } from './misComponentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
