import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostComponent } from './add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
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
import { of } from 'rxjs';
import { FirebaseStorageService } from '../firebase/storage/firebase-storage.service';
import { PostService } from '../services/post-services/post.service';
import { Router } from '@angular/router';
import { CovalentModule } from '../modules/covalent/covalent.module';
import { CardListComponent } from '../card-list/card-list.component';
import { StarRatingModule } from 'angular-star-rating';
import { StatsComponent } from '../stats/stats.component';
import { CardComponent } from '../card/card.component';
import { UserAvatarComponent } from '../card/components/user-avatar/user-avatar.component';

describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;
  let mockFileReader: any;

  let mockFirebaseStorageService: any;
  let mockFileRef: any;
  let mockUploadTask: any;

  let mockDocumentReference: any;

  let mockPostService: any;

  let mockRouter: any;

  beforeEach(async(() => {
    mockFileReader = jasmine.createSpyObj('injectableFileReader', ['readAsDataURL', 'onload']);
    mockFileReader.onload.and.callFake(() => {
      return {};
    });

    mockFileReader.readAsDataURL.and.returnValue({});

    mockFileRef = jasmine.createSpyObj('fileRef', ['getDownloadURL']);
    mockFileRef.getDownloadURL.and.returnValue(of('downloadurl.com'));

    mockUploadTask = jasmine.createSpyObj('uploadTask', ['percentageChanges', 'snapshotChanges']);
    mockUploadTask.percentageChanges.and.returnValue(of(100));
    mockUploadTask.snapshotChanges.and.returnValue(of({}));

    mockFirebaseStorageService = jasmine.createSpyObj('firebaseStorageService', ['createImageId', 'getFileRef', 'uploadImage']);
    mockFirebaseStorageService.createImageId.and.returnValue('123123');
    mockFirebaseStorageService.getFileRef.and.returnValue(mockFileRef);
    mockFirebaseStorageService.uploadImage.and.returnValue(mockUploadTask);

    mockDocumentReference = {
      valueChanges: () => of({})
    };
    mockPostService = jasmine.createSpyObj('postService', ['addPost']);
    mockPostService.addPost.and.returnValue(mockDocumentReference);

    mockRouter = jasmine.createSpyObj('router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [
        AddPostComponent,
        PostsComponent,
        ViewPostComponent,
        HomeComponent,
        CardListComponent,
        StatsComponent,
        CardComponent,
        UserAvatarComponent
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        RoutingModule,
        RouterTestingModule.withRoutes(routes),
        FirebaseModule,
        CovalentModule,
        StarRatingModule
      ],
      schemas: [],
      providers: [
        {provide: FirebaseStorageService, useValue: mockFirebaseStorageService},
        {provide: PostService, useValue: mockPostService },
        {provide: Router, useValue: mockRouter },
        {provide: InjectableFileReader, useValue: mockFileReader},
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
      // TODO need to move file upload out to service so it can be mocked
    });
  });

  describe('addPost', () => {
    it('should create a unique id', () => {
      component.addPost();
      expect(mockFirebaseStorageService.createImageId).toHaveBeenCalled();
    });

    it('should create a reference to the image file', () => {
      component.addPost();
      expect(mockFirebaseStorageService.getFileRef).toHaveBeenCalledWith('post-images/123123/');
    });

    it('should create an upload task', () => {
      component.imageFile = <File>{};
      component.addPost();
      expect(mockFirebaseStorageService.uploadImage).toHaveBeenCalledWith(<File>{}, '123123');
    });

    it('should subscribe to the percentage changes of the image upload', () => {
      component.addPost();
      expect(mockUploadTask.percentageChanges).toHaveBeenCalled();
      expect(component.uploadPercent).toBe(100);
    });

    it('should subscribe to the snapshot changes of the image upload', () => {
      component.addPost();
      expect(mockUploadTask.snapshotChanges).toHaveBeenCalled();
    });

    describe('OnUploadComplete', () => {
      it('should subscribe to get the DownloadUrl once image in uploaded', () => {
        component.addPost();
        expect(mockFileRef.getDownloadURL).toHaveBeenCalled();
      });

      it('should create a post', () => {
        component.addPost();
        expect(mockPostService.addPost).toHaveBeenCalled();
      });

      it('should route to posts', () => {
        component.addPost();
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/posts']);
      });
    });
  });
});
