import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post-services/post.service';
import { FirebaseFirestoreService } from '../firebase/firestore/firebase-firestore.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  public post: Post;

  constructor(
    private route: ActivatedRoute,
    private firebaseFirestoreService: FirebaseFirestoreService
  ) {}

  ngOnInit() {
    this.firebaseFirestoreService.getPost(this.route.snapshot.params.id).ref.get().then(res => {
      this.post = <Post>res.data();
    });
  }
}
