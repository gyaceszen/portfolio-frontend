import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private apiServerUrl='https://portfolioap-prueba.herokuapp.com';

  constructor(private http:HttpClient) { }

  public getProyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(`${this.apiServerUrl}/proyectos/todos`);
  }

  public agregarProyectos(idProyectos: number):Observable<Proyectos>{
    return this.http.post<Proyectos>(`${this.apiServerUrl}/proyectos/nuevo`, idProyectos);
  }

  public editarProyectos(proyectos: Proyectos):Observable<Proyectos	>{
    return this.http.put<Proyectos>(`${this.apiServerUrl}/proyectos/editar`, proyectos);
  }

  public eliminarProyectos(idProyectos: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/proyectos/borrar/${idProyectos}`);
  }

}
