import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss']
})
export class UserOptionsComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {}

  logout() {
    this.firebaseService.logout();
  }
}
