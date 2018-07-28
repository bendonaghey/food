import { UserService } from './user.service';
import { TestBed, inject, async } from '@angular/core/testing';
import { User } from '../../models/user.model';

describe('UserService', () => {

  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
    });

    userService = TestBed.get(UserService);

  });




});
