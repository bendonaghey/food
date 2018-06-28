import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDialogComponent } from './signup-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SignupComponent } from '../signup.component';

describe('SignupDialogComponent', () => {
  let component: SignupDialogComponent;
  let fixture: ComponentFixture<SignupDialogComponent>;
  let mockDialogData: any;
  let mockDialogRef: any;
  mockDialogData = {};
  mockDialogRef = jasmine.createSpyObj('dialog', ['close', 'updatePosition', 'updateSize']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupDialogComponent],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        SignupComponent,
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
        { provide: MatDialogRef, useValue: mockDialogRef }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
