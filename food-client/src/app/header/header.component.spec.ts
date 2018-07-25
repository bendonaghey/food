import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RegistrationComponent } from '../registration/registration.component';
import { UserOptionsComponent } from '../authentication/user-options/user-options.component';
import { CovalentModule } from '../modules/covalent/covalent.module';
import { MaterialModule } from '../modules/material/material.module';
import { HttpClientTestingModule } from '../../../node_modules/@angular/common/http/testing';
import { Router, NavigationEnd } from '../../../node_modules/@angular/router';
import { of } from '../../../node_modules/rxjs';
import { FirebaseModule } from '../firebase/firebase.module';
import { AuthenticationService } from '../authentication/authentication.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockRouter: any;
  let mockAuthenticationService: any;
  beforeEach(async(() => {

    const navEnd = new NavigationEnd(1, '/notHome', '/');

    mockRouter = {
      events: of(navEnd)
    };

    mockAuthenticationService = jasmine.createSpyObj('authenticationService', ['state']);
    mockAuthenticationService.state.and.returnValue(of());
    TestBed.configureTestingModule({
      imports: [CovalentModule, MaterialModule, HttpClientTestingModule, FirebaseModule],
      declarations: [
        HeaderComponent,
        RegistrationComponent,
        UserOptionsComponent
      ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AuthenticationService, useValue: mockAuthenticationService },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initilise variables', () => {
    expect(component.isScrolled).toBeFalsy();
    expect(component.currentPosition).toBe(0);
    expect(component.startPosition).toBe(0);
    expect(component.changePosition).toBe(100);
    expect(component.user).not.toBeDefined();
  });

  it('should should sub to authenticationService state', () => {
    expect(mockAuthenticationService.state).toHaveBeenCalled();
  });

  describe('ngOnInit', () => {
    it('should set isHome to true', fakeAsync(() => {
      component.ngOnInit();
      expect(component.isHome).toBeFalsy();
    }));
  });
});
