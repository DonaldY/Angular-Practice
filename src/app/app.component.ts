import { Component } from '@angular/core';
import { animation } from '@angular/animations';
import { routeAnimations } from './core/animations/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
}
