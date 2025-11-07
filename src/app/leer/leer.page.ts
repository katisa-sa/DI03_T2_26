import { Component, OnInit } from '@angular/core';
import { IArticulo } from 'src/app/interfaces/mis-interfaces';
import { GestionarNoticias } from 'src/app/servicios/gestionar-noticias';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.page.html',
  styleUrls: ['./leer.page.scss'],
  standalone: false
})
export class LeerPage implements OnInit {

  articulosSeleccionados: IArticulo[] = [];

  constructor(private gestionarNoticias: GestionarNoticias, private alertController: AlertController) { 
    this.articulosSeleccionados = gestionarNoticias.getNoticiasSeleccionadas();
  }

  ngOnInit() {
  }

  async presentAlert(articulo: IArticulo) {
    const alert = await this.alertController.create({
      header: "Confirmar",
      message: "Borrar noticia",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler:() => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler:() => {
            this.gestionarNoticias.borrarNoticia(articulo);
          }
        }
      ]
    });
    await alert.present();
  }
}
