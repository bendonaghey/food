import { TestBed, inject, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { PostService } from './post.service';
import { Post } from '../../models/post.model';
import { FirebaseModule } from '../../firebase/firebase.module';

describe('PostService', () => {
  const url: String = 'http://localhost:8190/api';
  let postService: PostService;
  let httpMock: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostService],
      imports: [HttpClientTestingModule, FirebaseModule]
    });

    postService = TestBed.get(PostService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));

});
