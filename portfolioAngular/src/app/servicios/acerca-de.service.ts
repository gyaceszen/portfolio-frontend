import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  private apiServerUrl='https://portfolioap-prueba.herokuapp.com';

  constructor(private http: HttpClient) { }

  public getUsuario():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/1`);
  }

  public editarUsuario(usuario: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/editar`, usuario);
  }

}
