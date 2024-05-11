import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ]),
    trigger('slideInOut', [
      state('out', style({  width: '0' })),
      state('in', style({ width: '70vw' })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ]),
    trigger('slideAnimation', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(100vw)'  // Adjust based on direction and width
      })),
      transition('in <=> out', animate('300ms ease-in-out'))
    ])

  ]



})
export class AppComponent {
  title = 'piccho-website';

  isMenuOpen = false;
  menuState = 'out';

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuState = this.isMenuOpen ? 'in': 'out';
  }
}
