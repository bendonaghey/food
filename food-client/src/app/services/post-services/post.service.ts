import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../../models/post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '../../../../node_modules/angularfire2/firestore';
import { AngularFireAuth } from '../../../../node_modules/angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private headers: HttpHeaders;

  private BASE_URL: String = 'http://localhost:8190/api';

  private postCollection: AngularFirestoreCollection<Post>;
  private postDocument: AngularFirestoreDocument<Post>;

  // private posts: Observable<Post[]>;

  constructor(private http: HttpClient,
              private angularFirestore: AngularFirestore,
              private angularFireAuth: AngularFireAuth) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getAll(): Observable<Post[]> {
    this.postCollection = this.angularFirestore.collection('posts');
    return this.postCollection.valueChanges();
  }

  addPost(post: Post):  AngularFirestoreDocument {
    const id = this.angularFireAuth.auth.currentUser.uid;
    const userRef = this.angularFirestore.collection('users').doc(id).ref;
    const uid = this.angularFirestore.createId();

    post.id = uid;
    post.userRef = userRef;

    const docRef = this.angularFirestore.collection('posts').doc(uid);
    docRef.set(post);
    return docRef;
  }

  getPost(id: string) {
    this.postDocument = this.angularFirestore.collection('posts').doc(id);
    return this.postDocument.valueChanges();
  }

  // getAll(): Observable<Post[]> {
  //   return this.http.get<Post[]>(`${this.BASE_URL}/posts`, { headers: this.headers});
  // }

  // getPostById(id: number): Observable<Post> {
  //   return this.http.get<Post>(`${this.BASE_URL}/posts/${id}`, { headers: this.headers });
  // }

  // createPost(email: string, post: any, url: string): Observable<Post> {
  //   return this.http.post<Post>(`${this.BASE_URL}/add-post`, { email, post, url }, { headers: this.headers });
  // }
}
