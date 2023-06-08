import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphsPageRoutingModule } from './graphs-routing.module';

import { GraphsPage } from './graphs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraphsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GraphsPage]
})
export class GraphsPageModule {}
