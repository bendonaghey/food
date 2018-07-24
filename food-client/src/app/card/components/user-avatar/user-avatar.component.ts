import { Component, OnInit, Input } from '@angular/core';
import { DocumentReference } from '../../../../../node_modules/angularfire2/firestore';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  @Input() userRef: DocumentReference;

  public user: User;

  constructor() { }

  ngOnInit() {
    this.userRef.get().then(res => {
      this.user = <User>res.data();
    });
  }

}
