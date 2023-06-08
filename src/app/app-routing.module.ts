import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pagename/:id',
    loadChildren: () => import('./pagename/pagename.module').then( m => m.PagenamePageModule)
  },
  {
    path: 'graphs/:id',
    loadChildren: () => import('./graphs/graphs.module').then( m => m.GraphsPageModule)
  },
  {
    path: 'intercep/:id',
    loadChildren: () => import('./intercep/intercep.module').then( m => m.IntercepPageModule)
  },
  {
    path: 'chartgraph/:id',
    loadChildren: () => import('./chartgraph/chartgraph.module').then( m => m.ChartgraphPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
