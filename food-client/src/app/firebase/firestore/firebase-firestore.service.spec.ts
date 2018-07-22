import { TestBed, inject } from '@angular/core/testing';

import { FirebaseFirestoreService } from './firebase-firestore.service';

describe('FirebaseFirestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseFirestoreService]
    });
  });

  it('should be created', inject([FirebaseFirestoreService], (service: FirebaseFirestoreService) => {
    expect(service).toBeTruthy();
  }));
});
