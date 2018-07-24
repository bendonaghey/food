import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post-services/post.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  public cards: Post[] = [];

  public posts: Observable<Post[]>;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getAll();
  }
}
