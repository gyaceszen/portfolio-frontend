import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private apiServerUrl='https://portfolioap-prueba.herokuapp.com';

  constructor(private http:HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/todas`);
  }
  
  public agregarEducacion(idEducacion: number):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/nueva`, idEducacion);
  }

  public editarEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/editar`, educacion);
  }

  public eliminarEducacion(idEducacion: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/borrar/${idEducacion}`);
  }

}