import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChartgraphPageRoutingModule } from './chartgraph-routing.module';


import { ChartgraphPage } from './chartgraph.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartgraphPageRoutingModule,
    
  ],
  declarations: [ChartgraphPage]
})
export class ChartgraphPageModule {}
