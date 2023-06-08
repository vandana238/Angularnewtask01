import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntercepPage } from './intercep.page';

const routes: Routes = [
  {
    path: '',
    component: IntercepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntercepPageRoutingModule {}
