import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../../models/post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private headers: HttpHeaders;

  private BASE_URL: String = 'http://localhost:8190/api';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASE_URL}/posts`, {
      headers: this.headers
    });
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.BASE_URL}/posts/${id}`, {
      headers: this.headers
    });
  }

  addPost(
    userId: string,
    title: string,
    description: string,
    location: string,
    pickUpTime: string,
    datePosted: number,
    likes: number,
    interest: number,
    active: boolean,
    expirationDate: string,
    image: string
  ): Observable<Post> {
    return this.http.post<Post>(
      `${this.BASE_URL}/add-post`,
      {
        userId,
        title,
        description,
        location,
        pickUpTime,
        datePosted,
        likes,
        interest,
        active,
        expirationDate,
        image
      },
      {
        headers: this.headers
      }
    );
  }
}
