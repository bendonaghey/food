import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Post } from '../models/post.model';
import { Router } from '../../../node_modules/@angular/router';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let mockRouter: any;

  beforeEach(async(() => {
    mockRouter = jasmine.createSpyObj('router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: Router, useValue: mockRouter }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    component.card = <Post>{id: '123123'};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('viewPost', () => {
    it('should should route to selected post', () => {
      component.viewPost(<Post>{id: '123123'});
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/posts', '123123']);
    });
  });
});
