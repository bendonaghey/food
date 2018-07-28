import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { FirebaseModule } from '../firebase/firebase.module';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { of } from '../../../node_modules/rxjs';



describe('AuthenticationService', () => {

  let mockAngularFireAuth: any;


  beforeEach(() => {
    mockAngularFireAuth = {
      authState: jasmine.createSpy('authState').and.returnValue(of({user: 'user'})),
      auth: {
        signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword'),
        createUserWithEmailAndPassword: jasmine.createSpy('createUserWithEmailAndPassword'),
        signOut: jasmine.createSpy('signOut')
      },

    };
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        { provide: AngularFireAuth, useValue: mockAngularFireAuth }
    ],
      imports: [FirebaseModule]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  describe('state', () => {
    it('should return the authState', inject([AuthenticationService], (service: AuthenticationService) => {
      const state = service.state();
      expect(state).toBeDefined();
    }));
  });

  describe('login', () => {
    it('should call login', inject([AuthenticationService], (service: AuthenticationService) => {
      service.login('email', 'password');
      expect(mockAngularFireAuth.auth.signInWithEmailAndPassword).toHaveBeenCalledWith('email', 'password');
    }));
  });

  describe('sign up', () => {
    it('should call signup', inject([AuthenticationService], (service: AuthenticationService) => {
      service.signup('email', 'password');
      expect(mockAngularFireAuth.auth.createUserWithEmailAndPassword).toHaveBeenCalledWith('email', 'password');
    }));
  });

  describe('sign out', () => {
    it('should call signout', inject([AuthenticationService], (service: AuthenticationService) => {
      service.signout();
      expect(mockAngularFireAuth.auth.signOut).toHaveBeenCalled();
    }));
  });
});
