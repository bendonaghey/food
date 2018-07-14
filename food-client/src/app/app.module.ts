import { MaterialModule } from './modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentModule } from './modules/covalent/covalent.module';
import { CardComponent } from './card/card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardListComponent } from './card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './modules/routing/routing.module';
import { ViewPostComponent } from './view-post/view-post.component';
import { PostsComponent } from './posts/posts.component';
import { environment } from '../environments/environment';
import { AddPostComponent } from './add-post/add-post.component';
import { UserOptionsComponent } from './authentication/user-options/user-options.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationDialogComponent } from './registration/registration-dialog/registration-dialog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [
    CardComponent,
    ToolbarComponent,
    AppComponent,
    ViewPostComponent,
    CardListComponent,
    UserProfileComponent
    PostsComponent,
    AddPostComponent,
    UserOptionsComponent,
    RegistrationComponent,
    RegistrationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CovalentModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: 'apiKey', useValue: environment.apiKey },
    { provide: 'authDomain', useValue: environment.authDomain },
    { provide: 'databaseURL', useValue: environment.databaseURL },
    { provide: 'projectId', useValue: environment.projectId },
    { provide: 'storageBucket', useValue: environment.storageBucket },
    { provide: 'messagingSenderId', useValue: environment.messagingSenderId }
  ],
  entryComponents: [RegistrationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
