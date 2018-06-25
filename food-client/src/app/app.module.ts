import { MaterialModule } from './modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    CardComponent,
    ToolbarComponent,
    AppComponent,
    ViewPostComponent,
    CardListComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CovalentModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    {provide: 'apiKey', useValue: environment.apiKey},
    {provide: 'authDomain', useValue: environment.authDomain},
    {provide: 'databaseURL', useValue: environment.databaseURL},
    {provide: 'projectId', useValue: environment.projectId},
    {provide: 'storageBucket', useValue: environment.storageBucket},
    {provide: 'messagingSenderId', useValue: environment.messagingSenderId}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
