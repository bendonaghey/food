import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostComponent } from './add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule, routes } from '../modules/routing/routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { PostsComponent } from '../posts/posts.component';
import { ViewPostComponent } from '../view-post/view-post.component';
import { HomeComponent } from '../home/home.component';
import { AngularFireStorageModule, AngularFireStorage } from '../../../node_modules/angularfire2/storage';
import { FirebaseModule } from '../firebase/firebase.module';
import { InjectableFileReader } from '../core/utilities/injectable-file-reader';

describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;
  let mockFileReader: any;
  beforeEach(async(() => {

    mockFileReader = jasmine.createSpyObj('injectableFileReader', ['readAsDataURL', 'onload']);
    mockFileReader.onload.and.callFake(() => {
      return {};
    });
    mockFileReader.readAsDataURL.and.returnValue({});
    TestBed.configureTestingModule({
      declarations: [
        AddPostComponent,
        PostsComponent,
        ViewPostComponent,
        HomeComponent
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        RoutingModule,
        RouterTestingModule.withRoutes(routes),
        FirebaseModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        {provide: InjectableFileReader, useValue: mockFileReader}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should build the form', () => {
      component.ngOnInit();
      expect(component.addPostForm.controls['title']).toBeDefined();
      expect(component.addPostForm.controls['description']).toBeDefined();
      expect(component.addPostForm.controls['location']).toBeDefined();
      expect(component.addPostForm.controls['pickUpTime']).toBeDefined();
      expect(component.addPostForm.controls['expirationDate']).toBeDefined();
    });
  });

  describe('selecteEvent', () => {
    it('should read a file', () => {
      const file: any = {target: {files: [<Blob>{}, <Blob>{}]}};
      component.selectEvent(file);
    });
  });
});
