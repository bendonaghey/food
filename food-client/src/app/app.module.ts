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
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StarRatingModule } from 'angular-star-rating';
import { FirebaseModule } from './firebase/firebase.module';
@NgModule({
  declarations: [
    CardComponent,
    ToolbarComponent,
    AppComponent,
    ViewPostComponent,
    CardListComponent,
    PostsComponent,
    AddPostComponent,
    UserOptionsComponent,
    RegistrationComponent,
    RegistrationDialogComponent,
    StatsComponent,
    HomeComponent,
    HeaderComponent
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
    StarRatingModule.forRoot(),
    FirebaseModule
  ],
  providers: [
  ],
  entryComponents: [RegistrationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
