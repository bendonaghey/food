import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ViewPostComponent } from './view-post.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable, of } from 'rxjs';
import { FirebaseModule } from '../firebase/firebase.module';

describe('ViewPostComponent', () => {
  let component: ViewPostComponent;
  let fixture: ComponentFixture<ViewPostComponent>;
  let mockActivatedRoute: any;

  beforeEach(async(() => {

    mockActivatedRoute = { paramMap: of('') };

    TestBed.configureTestingModule({
      declarations: [ViewPostComponent],
      imports: [HttpClientModule, FirebaseModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
