import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers: HttpHeaders;
  private BASE_URL: String = 'http://localhost:8190/api';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }
}
