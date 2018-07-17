import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post-services/post.service';
import { UserService } from '../services/user-services/user.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  users = 0;
  posts = 0;
  pickups = 225;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getAll().subscribe(res => {
      this.posts = res.length;
    });
  }
}
