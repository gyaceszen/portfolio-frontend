import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

    pruebaService(){
      console.log("¡CONSUMIENDO SERVICIO!");
    }
    

}
