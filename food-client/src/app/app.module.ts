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
import { AddPostComponent } from './add-post/add-post.component';
import { UserOptionsComponent } from './authentication/user-options/user-options.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationDialogComponent } from './registration/registration-dialog/registration-dialog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StarRatingModule } from 'angular-star-rating';
import { FirebaseModule } from './firebase/firebase.module';
import { UserAvatarComponent } from './card/components/user-avatar/user-avatar.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './maps/map/map.component';
@NgModule({
  declarations: [
    CardComponent,
    ToolbarComponent,
    AppComponent,
    ViewPostComponent,
    CardListComponent,
    UserProfileComponent,
    PostsComponent,
    AddPostComponent,
    UserOptionsComponent,
    RegistrationComponent,
    RegistrationDialogComponent,
    StatsComponent,
    HomeComponent,
    UserAvatarComponent,
    HeaderComponent,
    MapComponent
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
    FirebaseModule,
    StarRatingModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbcXxN2Voh7WAm-pZK5OYqDxE8n0WucRA',
      libraries: ['places']
    })
  ],
  providers: [
  ],
  entryComponents: [RegistrationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
