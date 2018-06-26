import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { LoginDialogComponent } from './login-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from '../login.component';
import { HttpClientModule } from '@angular/common/http';

describe('LoginDialogComponent', () => {
  let component: LoginDialogComponent;
  let fixture: ComponentFixture<LoginDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginDialogComponent],
      imports: [HttpClientModule],
      providers: [LoginComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([LoginComponent], (comp: LoginComponent) => {
    expect(comp).toBeTruthy();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
