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
import { LoginComponent } from './login/login.component';
import { LoginDialogComponent } from './login/login-dialog/login-dialog.component';
import { SignupComponent } from './signup/signup.component';
import { SignupDialogComponent } from './signup/signup-dialog/signup-dialog.component';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [
    CardComponent,
    ToolbarComponent,
    AppComponent,
    ViewPostComponent,
    CardListComponent,
    PostsComponent,
    LoginComponent,
    LoginDialogComponent,
    SignupComponent,
    SignupDialogComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CovalentModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [LoginDialogComponent, SignupDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
