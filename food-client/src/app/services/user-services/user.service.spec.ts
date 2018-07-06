import { UserService } from './user.service';
import { TestBed, inject, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { User } from '../../models/user.model';

describe('UserService', () => {
  const url: String = 'http://localhost:8190/api';
  let userService: UserService;
  let httpMock: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });

    userService = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('getUserByEmail', () => {
    it('should request a single user by email', async(() => {
      let response: any[];
      const email = 'markwilson@hotmail.com';
      userService.getUserByEmail(email).subscribe((res: any) => {
        response = res;
      });

      const mockRequest = httpMock.expectOne(url + '/login');
      expect(mockRequest.request.method).toBe('POST');
      expect(mockRequest.request.headers.get('Content-Type')).toBe(
        'application/json'
      );
      mockRequest.flush([]);
    }));
  });
});
