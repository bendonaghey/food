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
  private postCollection: AngularFirestoreCollection<Post>;
  private postDocument: AngularFirestoreDocument<Post>;

  constructor(private http: HttpClient,
              private angularFirestore: AngularFirestore,
              private angularFireAuth: AngularFireAuth) {}

  public getAll(): Observable<Post[]> {
    this.postCollection = this.angularFirestore.collection('posts');
    return this.postCollection.valueChanges();
  }

  public addPost(post: Post):  AngularFirestoreDocument {
    const id = this.angularFireAuth.auth.currentUser.uid;
    const userRef = this.angularFirestore.collection('users').doc(id).ref;
    const uid = this.angularFirestore.createId();

    post.id = uid;
    post.userRef = userRef;

    const docRef = this.angularFirestore.collection('posts').doc(uid);
    docRef.set(post);
    return docRef;
  }

  public getPost(id: string): Observable<Post> {
    this.postDocument = this.angularFirestore.collection('posts').doc(id);
    return this.postDocument.valueChanges();
  }
}
