import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../../services/user-services/user.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss']
})
export class UserOptionsComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService, private userService: UserService) {}

  email: string;

  ngOnInit() {
    this.userService.user().subscribe(res => {
      console.log(res);
      this.email = res.email;
    });
  }

  logout() {
    this.authenticationService.signout();
  }
}
