import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticulo, INoticia } from '../interfaces/mis-interfaces';
import { AlmacenarNoticias } from './almacenar-noticias';

@Injectable({
  providedIn: 'root',
})
export class GestionarNoticias {


  noticiasSeleccionadas: IArticulo[] = [];  

  constructor(private almacenarNoticias: AlmacenarNoticias, private http: HttpClient) {
    let noticiasResp: Promise <IArticulo[]> = this.almacenarNoticias.getObject('noticias');
    noticiasResp.then((datos) => {
     //if(Array.isArray(datos)){
     if(datos){
      this.noticiasSeleccionadas.push(...datos);
     }
    });
  }

  getNoticiasSeleccionadas(): IArticulo[] {
    return this.noticiasSeleccionadas;
  }

  añadirNoticia(articulo: IArticulo) {
    let articuloString = JSON.stringify(articulo);
    articulo = JSON.parse(articuloString);
    this.noticiasSeleccionadas.push(articulo);
    this.almacenarNoticias.setObject('noticias', this.noticiasSeleccionadas);
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
      this.almacenarNoticias.setObject('noticias', this.noticiasSeleccionadas);
    }
    
  }

}
