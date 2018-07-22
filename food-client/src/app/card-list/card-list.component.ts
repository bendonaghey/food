import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post-services/post.service';
import { FirebaseFirestoreService } from '../firebase/firestore/firebase-firestore.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  public cards: Post[] = [];

  constructor(private postService: PostService, private firebaseFirestoreService: FirebaseFirestoreService) {}

  ngOnInit() {
    this.firebaseFirestoreService.getAllPosts().ref.get().then(res => {
      res.forEach(doc => {
        this.cards.push(<Post>doc.data());
      });
    });
  }
}
