import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectos: Proyectos[]=[];
  public editProyectos: Proyectos | undefined;
  public borrarProyectos: Proyectos | undefined;

  constructor(private proyectosService:ProyectosService) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  public getProyectos():void{
    this.proyectosService.getProyectos().subscribe({
      next:(Response: Proyectos[]) =>{
        this.proyectos=Response;
      },
      error: (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:String, proyectos?: Proyectos):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-bs-target', '#agregarProyectosModal');
    }else if(mode==='delete'){
      this.borrarProyectos = proyectos;
      button.setAttribute('data-bs-target', '#deleteProyectosModal' )
    }else if(mode==='edit'){
      this.editProyectos = proyectos;
      button.setAttribute('data-bs-target', '#editarProyectosModal' )
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddProyectos(addForm: NgForm){
    document.getElementById('add-proyectos-form')?.click();
    this.proyectosService.agregarProyectos(addForm.value).subscribe({
      next: (response: Proyectos) => {
        console.log(response);
        this.getProyectos();
        addForm.resetForm();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onUpdateProyectos(proyectos: Proyectos){
    this.editProyectos=proyectos;
    document.getElementById('add-proyectos-form')?.click();
    this.proyectosService.editarProyectos(proyectos).subscribe({
      next: (response: Proyectos) => {
        console.log(response);
        this.getProyectos();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteProyectos(idProyectos: number):void{
    this.proyectosService.eliminarProyectos(idProyectos).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getProyectos();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
