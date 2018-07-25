import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDialogComponent } from './registration-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';
import { FirebaseModule } from '../../firebase/firebase.module';
import { MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegistrationDialogComponent', () => {
  let component: RegistrationDialogComponent;
  let fixture: ComponentFixture<RegistrationDialogComponent>;
  let mockDialogRef: any;

  beforeEach(() => {
    mockDialogRef = jasmine.createSpyObj('dialogRef', ['close', 'updatePosition', 'updateSize']);
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MaterialModule, FirebaseModule],
      declarations: [ RegistrationDialogComponent ],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
