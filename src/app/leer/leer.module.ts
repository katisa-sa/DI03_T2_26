import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerPageRoutingModule } from './leer-routing.module';

import { LeerPage } from './leer.page';
import { CardComponent } from "../componentes/card/card.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerPageRoutingModule,
    CardComponent
],
  declarations: [LeerPage]
})
export class LeerPageModule {}
