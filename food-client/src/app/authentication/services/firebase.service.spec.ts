import { TestBed, inject } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FirebaseService,
        { provide: 'apiKey', useValue: 'test' },
        { provide: 'authDomain', useValue: 'test' },
        { provide: 'databaseURL', useValue: 'test' },
        { provide: 'projectId', useValue: 'test' },
        { provide: 'storageBucket', useValue: 'test' },
        { provide: 'messagingSenderId', useValue: 'test' }
      ]
    });

    service = TestBed.get(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
