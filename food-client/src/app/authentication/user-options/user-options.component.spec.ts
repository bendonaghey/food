import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOptionsComponent } from './user-options.component';
import { CovalentModule } from '../../modules/covalent/covalent.module';
import { MaterialModule } from '../../modules/material/material.module';
import { FirebaseModule } from '../../firebase/firebase.module';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../../services/user-services/user.service';
import { of } from '../../../../node_modules/rxjs';

describe('UserOptionsComponent', () => {
  let component: UserOptionsComponent;
  let fixture: ComponentFixture<UserOptionsComponent>;
  let mockAuthenticationService: any;
  let mockUserService: any;
  beforeEach(async(() => {
    mockAuthenticationService = jasmine.createSpyObj('authenticationService', ['signout']);
    mockUserService = jasmine.createSpyObj('userService', ['user']);
    mockUserService.user.and.returnValue(of({email: 'test'}));
    TestBed.configureTestingModule({
      imports: [CovalentModule, MaterialModule, FirebaseModule],
      declarations: [ UserOptionsComponent ],
      providers: [
        {provide: AuthenticationService, useValue: mockAuthenticationService },
        {provide: UserService, useValue: mockUserService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should should subscribe to the userService.user', () => {
      component.ngOnInit();
      expect(mockUserService.user).toHaveBeenCalled();
    });

    it('should set the email address', () => {
      component.ngOnInit();
      expect(component.email).toBe('test');
    });
  });

  describe('logout', () => {
    it('should sign out using the authenticationService', () => {
      component.logout();
      expect(mockAuthenticationService.signout).toHaveBeenCalled();
    });
  });
});
