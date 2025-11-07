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
  apiKey: string = "95f72f17192c44e5861827c824a05dce";
  listaCategorias: string[] = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  
  constructor( private gestionarNoticias: GestionarNoticias, private apiNoticias: HttpClient ) { 
    this.recavarNoticias(this.listaCategorias[0]);
  }

    recavarNoticias(categoria:string) {
    let respuesta:Observable<INoticia> = this.apiNoticias.get<INoticia>("https://newsapi.org/v2/top-headlines?category=" + categoria + "&apiKey=" + this.apiKey);
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

  public cambioCategoria(eventoR: any){
    this.articulosIniciales = [];
    console.log(eventoR.detail.value);
    this.recavarNoticias(eventoR.detail.value);
  }
}

