import { Injectable, Inject } from '@angular/core';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public authState$ = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject('apiKey') private apiKey: string,
    @Inject('authDomain') private authDomain: string,
    @Inject('databaseURL') private databaseURL: string,
    @Inject('projectId') private projectId: string,
    @Inject('storageBucket') private storageBucket: string,
    @Inject('messagingSenderId') private messagingSenderId: string
  ) {
    const config = {
      apiKey: this.apiKey,
      authDomain: this.authDomain,
      databaseURL: this.databaseURL,
      projectId: this.projectId,
      storageBucket: this.storageBucket,
      messagingSenderId: this.messagingSenderId
    };
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
    firebase.auth().onAuthStateChanged(user => {
      this.authState$.next(true);
    });
  }

  public signup(email: string, password: string) {}
  public login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
      });
  }
  public logout() {
    firebase.auth().signOut();
  }
}
