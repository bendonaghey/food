import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentModule } from './modules/covalent/covalent.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material/material.module';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardListComponent } from './card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule, routes } from './modules/routing/routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { PostsComponent } from './posts/posts.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { UserOptionsComponent } from './authentication/user-options/user-options.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatsComponent } from './stats/stats.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StarRatingModule } from '../../node_modules/angular-star-rating';
import { AngularFireModule } from '../../node_modules/angularfire2';
import { AngularFireAuthModule } from '../../node_modules/angularfire2/auth';
import { AngularFireStorageModule } from '../../node_modules/angularfire2/storage';
import { UserAvatarComponent } from './card/components/user-avatar/user-avatar.component';
import { environment } from '../environments/environment';
import { MapComponent } from './maps/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { UserProfileComponent } from './user-profile/user-profile.component';

describe('AppComponent', () => {
  const firebaseConfig = {
    apiKey: 'test',
    authDomain: 'test',
    databaseURL: 'test',
    projectId: 'test',
    storageBucket: 'test',
    messagingSenderId: 'test'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent,
        CardComponent,
        PostsComponent,
        CardListComponent,
        ViewPostComponent,
        AddPostComponent,
        UserOptionsComponent,
        RegistrationComponent,
        StatsComponent,
        HomeComponent,
        HeaderComponent,
        UserAvatarComponent,
        MapComponent,
        UserProfileComponent
      ],
      imports: [
        MaterialModule,
        BrowserModule,
        CovalentModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RoutingModule,
        RouterTestingModule.withRoutes(routes),
        StarRatingModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireStorageModule,
        AngularFireStorageModule,
        AgmCoreModule
      ],
      providers: [
        { provide: environment.firebase, useValue: firebaseConfig },
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
