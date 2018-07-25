import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { Subject } from '../../../node_modules/rxjs';
import { takeUntil, tap } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isHome = true;
  currentPosition = 0;
  startPosition = 0;
  changePosition = 100;
  user: any;

  private destroy$ = new Subject<any>();

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.state().subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.router.events.pipe(
      takeUntil(this.destroy$)
    ).subscribe(res => {
      if (res instanceof NavigationEnd) {
        if (res.url === '/home' || res.url === '/') {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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
}
