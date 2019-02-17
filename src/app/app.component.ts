import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-main><router-outlet></router-outlet></app-main>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-manager';
}
