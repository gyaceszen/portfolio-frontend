import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencias } from '../models/experiencias';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
  
  public getExperiencias():Observable<Experiencias[]>{
    return this.http.get<Experiencias[]>(`${this.apiServerUrl}/experiencias/todas`);
  }

  public agregarExperiencias(idExperiencia: number):Observable<Experiencias>{
    return this.http.post<Experiencias>(`${this.apiServerUrl}/experiencias/nueva`, idExperiencia);
  }

  public editarExperiencias(experiencias: Experiencias):Observable<Experiencias>{
    return this.http.put<Experiencias>(`${this.apiServerUrl}/experiencias/editar`, experiencias	);
  }

  public eliminarExperiencias(idExperiencia: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/experiencias/borrar/${idExperiencia}`);
  }

}
