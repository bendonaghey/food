import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Post;

  constructor(private router: Router) {}

  ngOnInit() {}

  viewPost(post: Post) {
    // this.router.navigate(['/posts', post.postId]);
  }

  likePost(post: Post) {}
}
