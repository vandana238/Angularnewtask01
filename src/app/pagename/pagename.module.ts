import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagenamePageRoutingModule } from './pagename-routing.module';

import { PagenamePage } from './pagename.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagenamePageRoutingModule
  ],
  declarations: [PagenamePage]
})
export class PagenamePageModule {}
