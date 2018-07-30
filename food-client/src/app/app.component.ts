import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isScrolled = false;

  currentPosition = 0;
  startPosition = 0;
  changePosition = 100;

  userEmail: string;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  updateHeader($event) {
    this.currentPosition =
      (window.pageYOffset || $event.target.scrollTop) -
      ($event.target.clientTop || 0);
    if (this.currentPosition >= this.changePosition) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
