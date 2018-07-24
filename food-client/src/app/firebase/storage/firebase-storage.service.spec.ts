import { TestBed, inject } from '@angular/core/testing';

import { FirebaseStorageService } from './firebase-storage.service';
import { FirebaseModule } from '../firebase.module';

describe('FirebaseStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseStorageService],
      imports: [FirebaseModule]
    });
  });

  it('should be created', inject([FirebaseStorageService], (service: FirebaseStorageService) => {
    expect(service).toBeTruthy();
  }));
});
