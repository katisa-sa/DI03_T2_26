import { Component, Input, OnInit } from '@angular/core';
import { IArticulo } from 'src/app/interfaces/mis-interfaces';
import { GestionarNoticias } from 'src/app/servicios/gestionar-noticias';
import { IonList } from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [IonicModule],
})
export class CardComponent  implements OnInit {

  @Input() articulo: IArticulo = {} as IArticulo;
  
  constructor(private gestionNoticias: GestionarNoticias) { 
  }

  ngOnInit() {}

}
