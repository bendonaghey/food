import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { FirebaseModule } from '../firebase/firebase.module';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService],
      imports: [FirebaseModule]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
