import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post-services/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  public post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService
      .getPostById(this.route.snapshot.params.id)
      .subscribe(res => {
        this.post = res;
      });
  }
}
