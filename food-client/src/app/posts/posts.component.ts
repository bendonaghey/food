import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { PostService } from '../services/post-services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
  }

  addPost() {
    // this.postService.addPost();
    this.router.navigate(['posts/add']);
  }
}
