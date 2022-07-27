import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Usuario } from 'src/app/models/usuario';
//import { EncabezadoService } from 'src/app/servicios/encabezado.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  /*
  public usuario : Usuario | undefined;
  public editUsuario: Usuario | undefined;
  */

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.getUser();

  }

  //METODOS AUTH0 INCIAR Y CERRAR SESION
  login(){
    this.auth.loginWithRedirect();
  }
  logout(){
    this.auth.logout();
  }
  //FIN AUTH0

  
  public getUser():void{
    /*this.encabezadoService.getUser().subscribe({
      next: (response: Usuario) =>{
        this.usuario=response
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })*/
  }
  
}
