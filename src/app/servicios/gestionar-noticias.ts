import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticulo, INoticia } from '../interfaces/mis-interfaces';

@Injectable({
  providedIn: 'root',
})
export class GestionarNoticias {


  noticiasSeleccionadas: IArticulo[] = [];  

  constructor() {
    
  }

  getNoticiasSeleccionadas(): IArticulo[] {
    return this.noticiasSeleccionadas;
  }

  añadirNoticia(articulo: IArticulo) {
    let articuloString = JSON.stringify(articulo);
    articulo = JSON.parse(articuloString);
    this.noticiasSeleccionadas.push(articulo);
  }

  elegirNoticia(articulo: IArticulo): number {
    let indice:number = this.noticiasSeleccionadas.findIndex(
      function(articuloEnArray){
        return JSON.stringify(articuloEnArray) === JSON.stringify(articulo);
      }
    );    
      return indice;
  }

  borrarNoticia(articulo: IArticulo) {
    let index = this.elegirNoticia(articulo);
    if (index > -1) {
      this.noticiasSeleccionadas.splice(index, 1);
    }
  }

}
