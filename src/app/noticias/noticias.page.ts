import { Component, OnInit } from '@angular/core';
import { IArticulo, INoticia } from '../interfaces/mis-interfaces';
import { HttpClient } from '@angular/common/http';
import { GestionarNoticias } from '../servicios/gestionar-noticias';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  standalone: false
})
export class NoticiasPage implements OnInit {

  articulosIniciales: IArticulo[] = [];
  articulosSeleccionados: IArticulo[] = [];
  
  constructor( private gestionarNoticias: GestionarNoticias, private jsonNoticias: HttpClient ) { 
    this.recavarNoticias();
  }

    recavarNoticias() {
    let respuesta:Observable<INoticia> = this.jsonNoticias.get<INoticia>("../assets/datos/articulos.json");
    respuesta.subscribe((datos) => {
      if(datos && Array.isArray(datos.articles)){
        this.articulosIniciales.push(...datos.articles);
        console.log(this.articulosIniciales);
      }
    }
    );
  } 
  
  ngOnInit() {
    
  }

  seleccionado(articulo: IArticulo): boolean {
    let indice = this.gestionarNoticias.elegirNoticia(articulo);
    if(indice != -1) {
      return true;
    } else {
      return false;
    }
  }

  modificarArticulo(eventoRecibido: any, articulo: IArticulo) {
    let estaClickado: boolean = eventoRecibido.detail.checked;
    if(estaClickado) {
      this.gestionarNoticias.añadirNoticia(articulo);
      console.log("articulo añadido");
    } else  {
      this.gestionarNoticias.borrarNoticia(articulo);
      console.log("articulo borrado");
    } 
    
  }
}

