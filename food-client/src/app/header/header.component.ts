import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../services/user-services/user.service';
import { FirebaseService } from '../authentication/services/firebase.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;

  isHome = true;

  currentPosition = 0;
  startPosition = 0;
  changePosition = 100;

  userEmail: string;

  constructor(
    private firebaseService: FirebaseService,
    private userService: UserService,
    private router: Router
  ) {
    this.firebaseService.authState$.subscribe(res => {
      this.userEmail = res;
      if (this.userEmail) {
        this.getUserDetails();
      }
    });
  }

  ngOnInit() {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        if (res.url === '/home') {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
      }
    });
  }

  logout() {
    this.firebaseService.logout();
  }

  isUserLoggedIn(): boolean {
    return this.userEmail !== null;
  }

  setRoute() {}

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
