import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experiencias } from 'src/app/models/experiencias';
import { ExperienciasService } from 'src/app/servicios/experiencias.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  public experiencias: Experiencias[] = [];
  public editExperiencias: Experiencias | undefined;
  public borrarExperiencias: Experiencias | undefined;

  constructor(public auth: AuthService, private experienciasService:ExperienciasService) { }

  ngOnInit(): void {
    this.getExperiencias();
  }

  public getExperiencias():void{
    this.experienciasService.getExperiencias().subscribe({
      next:(Response: Experiencias[]) =>{
        this.experiencias=Response;
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:String, experiencias?: Experiencias):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-bs-target', '#agregarExperienciasModal');
    }else if(mode==='delete'){
      this.borrarExperiencias = experiencias;
      button.setAttribute('data-bs-target', '#deleteExperienciaModal' )
    }else if(mode==='edit'){
      this.editExperiencias = experiencias;
      button.setAttribute('data-bs-target', '#editarExperienciaModal' )
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddExperiencias(addForm: NgForm){
    document.getElementById('add-experiencias-form')?.click();
    this.experienciasService.agregarExperiencias(addForm.value).subscribe({
      next: (response: Experiencias) => {
        console.log(response);
        this.getExperiencias();
        addForm.resetForm();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onUpdateExperiencias(experiencias: Experiencias){
    this.editExperiencias=experiencias;
    document.getElementById('add-experiencias-form')?.click();
    this.experienciasService.editarExperiencias(experiencias).subscribe({
      next: (response: Experiencias) => {
        console.log(response);
        this.getExperiencias();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteExperiencias(idExperiencias: number):void{
    this.experienciasService.eliminarExperiencias(idExperiencias).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getExperiencias();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
