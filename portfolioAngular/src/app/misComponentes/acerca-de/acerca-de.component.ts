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



}
