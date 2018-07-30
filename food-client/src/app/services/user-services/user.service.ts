import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { AngularFirestoreDocument, AngularFirestore } from '../../../../node_modules/angularfire2/firestore';
import { AngularFireAuth } from '../../../../node_modules/angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDocument: AngularFirestoreDocument<User>;
  constructor(private angularFireAuth: AngularFireAuth, private angularFirestore: AngularFirestore) { }

  public user(): Observable<User> {
    this.userDocument = this.angularFirestore.doc<User>(`users/${this.angularFireAuth.auth.currentUser.uid}`);
    return this.userDocument.valueChanges();
  }

  public createUser(id: string, username: string, email: string) {
    const userRef = this.angularFirestore.collection('users').doc(id).ref;
    return userRef.set(this.generateUser(id, username, email));
  }

  private generateUser(id: string, username: string, email: string): User {
    return {
      email: email,
      username: username,
      bio: '',
      dob: '',
      firstname: '',
      lastname: '',
      posts: [],
      id: id
    };
  }
}
