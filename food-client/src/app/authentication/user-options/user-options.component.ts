import { Component, OnInit } from '@angular/core';
import { FirebaseAuthenticationService } from '../../firebase/authentication/firebase-authentication.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss']
})
export class UserOptionsComponent implements OnInit {
  constructor(private firebaseAuthenticationService: FirebaseAuthenticationService) {}

  ngOnInit() {}


  logout() {
    this.firebaseAuthenticationService.signout();
  }
}
