import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  public usuario: Usuario | undefined;
  public editarUsuario: Usuario | undefined;
  public borrarUsuario: Usuario | undefined;
  constructor(private acercadeService: AcercaDeService) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  public getUsuario():void{
    this.acercadeService.getUsuario().subscribe({
      next:(response: Usuario) => {
        this.usuario=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:String, acercaDeUsuario?: Usuario):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='add'){
      // button.setAttribute('data-bs-target', '#agregarUsuarioModal');
    }else if(mode==='delete'){
      this.borrarUsuario = acercaDeUsuario;
      // button.setAttribute('data-bs-target', '#deleteUsuarioModal' )
    }else if(mode==='edit'){
      this.editarUsuario = acercaDeUsuario;
      button.setAttribute('data-bs-target', '#editarUsuarioModal' )
    }

    container?.appendChild(button);
    button.click();
  }

  //creo metodo para unicamente editar mi usuario
  public onUpdateUsuario(acercaDeUsuario: Usuario){
    this.editarUsuario=acercaDeUsuario;
    document.getElementById('add-usuario-form')?.click();
    this.acercadeService.editarUsuario(acercaDeUsuario).subscribe({
      next: (response: Usuario) => {
        console.log(response);
        this.getUsuario();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }



}
