import { Component, HostListener } from '@angular/core';
import { FirebaseService } from './authentication/services/firebase.service';
import { filter, tap } from 'rxjs/operators';
import { UserService } from './services/user-services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  email = 'a';
  password = 'a';

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

  private getUserDetails() {
    this.userService.getUserByEmail(this.userEmail).subscribe(res => {
      this.userService.user = res;
    });
  }
}
