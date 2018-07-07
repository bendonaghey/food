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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { UserOptionsComponent } from './authentication/user-options/user-options.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent,
        CardComponent,
        PostsComponent,
        CardListComponent,
        ViewPostComponent,
        LoginComponent,
        SignupComponent,
        UserOptionsComponent
      ],
      imports: [
        MaterialModule,
        BrowserModule,
        CovalentModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RoutingModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        { provide: 'apiKey', useValue: 'test' },
        { provide: 'authDomain', useValue: 'test' },
        { provide: 'databaseURL', useValue: 'test' },
        { provide: 'projectId', useValue: 'test' },
        { provide: 'storageBucket', useValue: 'test' },
        { provide: 'messagingSenderId', useValue: 'test' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
