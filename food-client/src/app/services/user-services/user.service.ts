import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers: HttpHeaders;
  private BASE_URL: String = 'http://localhost:8190/api';
  _user: User;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/login`, {email}, {headers: this.headers});
  }

  createUser(username: string, email: string) {
    return this.http.post<User>(`${this.BASE_URL}/signup`, {username, email}, {headers: this.headers});
  }

  generateUser(username: string, email: string): User {
    return {
      email: email,
      username: username,
      bio: '',
      dob: '',
      firstname: '',
      lastname: '',
      posts: []
    };
  }

  get user() {
    return this._user;
  }

  set user(user: User) {
    this._user = user;
  }
}
