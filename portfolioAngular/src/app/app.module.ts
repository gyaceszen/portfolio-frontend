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

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    ExperienciasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
