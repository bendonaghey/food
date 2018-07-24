import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RegistrationComponent } from '../registration/registration.component';
import { UserOptionsComponent } from '../authentication/user-options/user-options.component';
import { CovalentModule } from '../modules/covalent/covalent.module';
import { MaterialModule } from '../modules/material/material.module';
import { HttpClientTestingModule } from '../../../node_modules/@angular/common/http/testing';
import { Router } from '../../../node_modules/@angular/router';
import { of } from '../../../node_modules/rxjs';
import { FirebaseModule } from '../firebase/firebase.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockRouter: any;
  beforeEach(async(() => {
    mockRouter = {
      events: of([])
    };

    TestBed.configureTestingModule({
      imports: [CovalentModule, MaterialModule, HttpClientTestingModule, FirebaseModule],
      declarations: [
        HeaderComponent,
        RegistrationComponent,
        UserOptionsComponent
      ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: 'apiKey', useValue: 'test' },
        { provide: 'authDomain', useValue: 'test' },
        { provide: 'databaseURL', useValue: 'test' },
        { provide: 'projectId', useValue: 'test' },
        { provide: 'storageBucket', useValue: 'test' },
        { provide: 'messagingSenderId', useValue: 'test' }
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
});
