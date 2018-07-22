import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '../../../../node_modules/angularfire2/firestore';
import { UserService } from '../../services/user-services/user.service';
import { PostService } from '../../services/post-services/post.service';
import { Post } from '../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFirestoreService {

  constructor(private fireStore: AngularFirestore,
              private userService: UserService) { }

  public createUser(uid: string, username: string, email: string): Promise<void> {
    const db = this.fireStore.collection('users');
    return db.doc(uid).set(this.userService.generateUser(username, email));
  }

  public addPost(post: Post): Promise<firebase.firestore.DocumentReference> {
    return this.fireStore.collection('posts').add(post);
  }

  public addPostToUser(post: Post): Promise<void> {
    return this.fireStore.collection('users').doc(this.userService.user).ref.get().then(res => {
      const posts = res.get('posts');
      posts.push(post);
      this.fireStore.collection('users').doc(this.userService.user).update({
        posts: posts
      });
    });
    // return this.fireStore.collection('users').doc(this.userService.user).update({
    //   posts: [post]
    // });
  }

  public getPost(id: string): AngularFirestoreDocument<Post> {
    return this.fireStore.doc(`posts/${id}`);
  }
  public getAllPosts(): AngularFirestoreCollection {
    return this.fireStore.collection('posts');
  }
}
