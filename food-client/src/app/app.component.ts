import { Component, HostListener } from '@angular/core';
import { FirebaseService } from './authentication/services/firebase.service';
declare const window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  email = 'a';
  password = 'a';
  constructor(private firebase: FirebaseService) {

  }

  login() {
    this.firebase.login(this.email, this.password);
  }

  logout() {
    this.firebase.logout();
  }
}


