import { Injectable } from '@angular/core';
import { AngularFirestore } from '../../../../node_modules/angularfire2/firestore';
import { UserService } from '../../services/user-services/user.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFirestoreService {

  constructor(private fireStore: AngularFirestore, private userService: UserService) { }

  public createUser(uid: string, username: string, email: string): Promise<void> {
    const db = this.fireStore.collection('users');
    return db.doc(uid).set(this.userService.generateUser(username, email));
  }
}
