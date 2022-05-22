import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educaciones: Educacion[]=[];
  public editEducaciones: Educacion | undefined;
  public borrarEducaciones: Educacion | undefined;

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.getEducaciones();
  }

  public getEducaciones():void{
    this.educacionService.getEducacion().subscribe({
      next:(Response: Educacion[]) =>{
        this.educaciones=Response;
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:String, educacion?: Educacion):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-bs-target', '#agregarEducacionModal');
    }else if(mode==='delete'){
      this.borrarEducaciones = educacion;
      button.setAttribute('data-bs-target', '#deleteEducacionModal' )
    }else if(mode==='edit'){
      this.editEducaciones = educacion;
      button.setAttribute('data-bs-target', '#editarEducacionModal' )
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddEducacion(addForm: NgForm){
    document.getElementById('add-education-form')?.click();
    this.educacionService.agregarEducacion(addForm.value).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.getEducaciones();
        addForm.resetForm();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onUpdateEducacion(educacion: Educacion){
    this.editEducaciones=educacion;
    document.getElementById('add-education-form')?.click();
    this.educacionService.editarEducacion(educacion).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.getEducaciones();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteEducacion(idEducacion: number):void{
    this.educacionService.eliminarEducacion(idEducacion).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getEducaciones();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
