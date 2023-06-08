import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mail', url: '/folder/inbox', icon: 'mail' },
    { title: 'Search', url: '/pagename/search', icon: 'search' },
    { title: 'graphs', url: '/graphs/cards', icon: 'bar-chart' },
    { title: 'intercep', url: '/intercep/upload', icon: 'cloud-upload' },
    { title: 'chartgraph', url: '/chartgraph/research', icon: 'pie-chart' }


  ];
  constructor() {}
}
