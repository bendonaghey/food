import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
  }

  addPost() {
    this.router.navigate(['posts/add']);
  }
}
