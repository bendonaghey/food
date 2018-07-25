import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CardListComponent } from './card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseModule } from '../firebase/firebase.module';
import { PostService } from '../services/post-services/post.service';
import { of } from '../../../node_modules/rxjs';
import { Post } from '../models/post.model';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  let mockPostService: any;

  beforeEach(async(() => {

    mockPostService = jasmine.createSpyObj('postService', ['getAll']);
    mockPostService.getAll.and.returnValue(of([
      {id: '1'}, {id: '2'}
    ]));

    TestBed.configureTestingModule({
      declarations: [CardListComponent],
      imports: [HttpClientModule, FirebaseModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: PostService, useValue: mockPostService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should get the posts', () => {
      component.posts.subscribe(res => {
        expect(res).toEqual(<Post[]>[{id: '1'}, {id: '2'}]);
      });
    });
  });
});
