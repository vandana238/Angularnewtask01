import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagenamePage } from './pagename.page';

const routes: Routes = [
  {
    path: '',
    component: PagenamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagenamePageRoutingModule {}
