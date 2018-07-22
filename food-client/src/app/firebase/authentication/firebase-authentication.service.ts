import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from '../../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthenticationService {
  constructor(private firebaseAuth: AngularFireAuth) {}

  public authState(): Observable<firebase.User> {
    return this.firebaseAuth.authState;
  }

  public login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public signup(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  public signout(): void {
    this.firebaseAuth.auth.signOut();
  }
}
