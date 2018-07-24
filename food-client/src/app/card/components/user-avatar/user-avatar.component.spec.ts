import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvatarComponent } from './user-avatar.component';
import { StarRatingModule, StarRatingComponent, StarRatingConfigService } from '../../../../../node_modules/angular-star-rating';
import { of } from '../../../../../node_modules/rxjs';
import { DocumentReference } from '../../../../../node_modules/angularfire2/firestore';

describe('UserAvatarComponent', () => {
  let component: UserAvatarComponent;
  let fixture: ComponentFixture<UserAvatarComponent>;
  let mockUserRef: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAvatarComponent ],
      imports: [StarRatingModule],
      providers: [
        StarRatingConfigService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    mockUserRef = jasmine.createSpyObj('userRef', ['get']);

    mockUserRef.get.and.returnValue({then: function() {} });



    fixture = TestBed.createComponent(UserAvatarComponent);
    component = fixture.componentInstance;
    component.userRef = mockUserRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
