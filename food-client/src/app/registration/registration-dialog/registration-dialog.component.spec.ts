import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { RegistrationDialogComponent } from './registration-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from '../registration.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';
import { UserService } from '../../services/user-services/user.service';

describe('RegistrationDialogComponent', () => {
  let component: RegistrationDialogComponent;
  let fixture: ComponentFixture<RegistrationDialogComponent>;
  let mockDialogData: any;
  let mockDialogRef: any;
  let mockAuthenticationService: any;
  let mockUserService: any;
  mockDialogData = {};
  mockDialogRef = jasmine.createSpyObj('dialog', [
    'close',
    'updatePosition',
    'updateSize'
  ]);

  beforeEach(async(() => {
    mockAuthenticationService = jasmine.createSpyObj('authenticationService', ['login', 'signup']);
    mockUserService = jasmine.createSpyObj('userService', ['createUser']);
    TestBed.configureTestingModule({
      declarations: [RegistrationDialogComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: AuthenticationService, useValue: mockAuthenticationService },
        { provide: UserService, useValue: mockUserService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
