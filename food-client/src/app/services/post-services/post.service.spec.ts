import { TestBed, inject, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { PostService } from './post.service';
import { Post } from '../../models/post.model';

describe('PostService', () => {
  const url: String = 'http://localhost:8190/api';
  let postService: PostService;
  let httpMock: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostService],
      imports: [HttpClientTestingModule]
    });

    postService = TestBed.get(PostService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));

  describe('getAll', () => {
    it('should request a list for all posts', async(() => {
      let response: any[];
      postService.getAll().subscribe((res: any) => {
        response = res;
      });
      const mockRequest = httpMock.expectOne(url + '/posts');
      expect(mockRequest.request.url).toBe(url + '/posts');
      expect(mockRequest.request.method).toBe('GET');
      expect(mockRequest.request.headers.get('Content-Type')).toBe(
        'application/json'
      );
      mockRequest.flush([]);
    }));

    it('should return a list of posts', async(() => {
      let response: Post[] = [];
      const mockResponse = [{ userId: 'test' }];

      postService.getAll().subscribe((res: any) => {
        response = res;
      });

      httpMock.expectOne(url + '/posts').flush(mockResponse);
      expect(response.length).toBe(1);
      expect(response[0].userId).toBe('test');
      httpMock.verify();
    }));
  });

  describe('getPostById', () => {
    it('should request a single post', async(() => {
      let response: any[];
      const id = 1000;
      postService.getPostById(id).subscribe((res: any) => {
        response = res;
      });
      const mockRequest = httpMock.expectOne(url + '/posts/' + id);
      expect(mockRequest.request.url).toBe(url + '/posts/' + id);
      expect(mockRequest.request.method).toBe('GET');
      expect(mockRequest.request.headers.get('Content-Type')).toBe(
        'application/json'
      );
      mockRequest.flush([]);
    }));

    it('should return a single post', async(() => {
      let response: Post;
      const mockResponse = <Post>{ postId: '1000' };
      const id = 1000;

      postService.getPostById(id).subscribe((res: any) => {
        response = res;
      });

      httpMock.expectOne(url + '/posts/' + id).flush(mockResponse);
      expect(response).toBe(mockResponse);
      httpMock.verify();
    }));
  });
});
