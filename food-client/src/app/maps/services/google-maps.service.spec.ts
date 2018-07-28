import { TestBed, inject } from '@angular/core/testing';
import { GoogleMapsService } from './google-maps.service';

describe('GoogleMapsService', () => {
  let service: GoogleMapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleMapsService]
    });

    service = TestBed.get(GoogleMapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
