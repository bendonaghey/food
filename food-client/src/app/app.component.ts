import { Component, HostListener, HostBinding } from '@angular/core';
import { FirebaseService } from './authentication/services/firebase.service';
import { filter, tap } from 'rxjs/operators';
import { UserService } from './services/user-services/user.service';
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

  constructor(
    private firebaseService: FirebaseService,
    private userService: UserService
  ) {
    this.firebaseService.authState$.subscribe(res => {
      this.userEmail = res;
      if (this.userEmail) {
        this.getUserDetails();
      }
    });
  }

  logout() {
    this.firebaseService.logout();
  }

  isUserLoggedIn(): boolean {
    return this.userEmail !== null;
  }

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

  private getUserDetails() {
    this.userService.getUserByEmail(this.userEmail).subscribe(res => {
      this.userService.user = res;
    });
  }
}
