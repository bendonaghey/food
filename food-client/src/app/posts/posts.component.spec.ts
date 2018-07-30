import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PostsComponent } from './posts.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { CardListComponent } from '../card-list/card-list.component';
import { CardComponent } from '../card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '../../../node_modules/@angular/router';
import { RouterTestingModule } from '../../../node_modules/@angular/router/testing';
import { FirebaseApp } from '../../../node_modules/angularfire2';
import { FirebaseModule } from '../firebase/firebase.module';
import { MapComponent } from '../maps/map/map.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostsComponent,
        ToolbarComponent,
        CardListComponent,
        CardComponent
      ],
      imports: [HttpClientModule, RouterTestingModule, FirebaseModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
