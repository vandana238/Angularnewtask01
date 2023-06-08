import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { IntercepPageRoutingModule } from './intercep-routing.module';

import { IntercepPage } from './intercep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntercepPageRoutingModule,
    HttpClientModule
  ],
  declarations: [IntercepPage]
})
export class IntercepPageModule {}
