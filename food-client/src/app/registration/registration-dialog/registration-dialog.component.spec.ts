import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDialogComponent } from './registration-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from '../registration.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RegistrationDialogComponent', () => {
  let component: RegistrationDialogComponent;
  let fixture: ComponentFixture<RegistrationDialogComponent>;
  let mockDialogData: any;
  let mockDialogRef: any;
  mockDialogData = {};
  mockDialogRef = jasmine.createSpyObj('dialog', [
    'close',
    'updatePosition',
    'updateSize'
  ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationDialogComponent],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [
        RegistrationComponent,
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: 'apiKey', useValue: 'test' },
        { provide: 'authDomain', useValue: 'test' },
        { provide: 'databaseURL', useValue: 'test' },
        { provide: 'projectId', useValue: 'test' },
        { provide: 'storageBucket', useValue: 'test' },
        { provide: 'messagingSenderId', useValue: 'test' }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
