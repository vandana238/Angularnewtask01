import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartgraphPage } from './chartgraph.page';

const routes: Routes = [
  {
    path: '',
    component: ChartgraphPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartgraphPageRoutingModule {}
