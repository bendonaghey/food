import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  public cards: Post[];
  card: Post;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getAll().subscribe(res => {
      this.cards = res;
    });
  }

  viewCard(card: Post) {
    this.card = card;
    this.postService.getPostById().subscribe(res => {
      this.card = res;
      console.log(card);
    });
  }
}
