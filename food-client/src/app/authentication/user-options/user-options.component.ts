import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../../services/user-services/user.service';
import { takeUntil } from '../../../../node_modules/rxjs/operators';
import { Subject } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss']
})
export class UserOptionsComponent implements OnInit, OnDestroy {

  constructor(private authenticationService: AuthenticationService, private userService: UserService) {}

  public email: string;
  private destroy$ = new Subject<any>();


  ngOnInit() {
    this.userService.user().pipe(
      takeUntil(this.destroy$)
    ).subscribe(res => {
      this.email = res.email;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public logout() {
    this.authenticationService.signout();
  }
}
