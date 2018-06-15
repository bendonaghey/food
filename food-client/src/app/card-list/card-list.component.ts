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

  // cards: Post[] = [
  //   {
  //     userId: 'ID',
  //     title: 'PostTitle',
  //     description: 'PostDescription',
  //     location: 'Derry',
  //     datePosted: 121205,
  //     likes: 32,
  //     interest: 12,
  //     active: true,
  //     expirationDate: 150505,
  //     image: 'http://via.placeholder.com/350x350'
  //   },
  //   {
  //     userId: 'ID',
  //     title: 'PostTitle',
  //     description: 'PostDescription',
  //     location: 'Derry',
  //     datePosted: 121205,
  //     likes: 32,
  //     interest: 12,
  //     active: true,
  //     expirationDate: 150505,
  //     image: 'http://via.placeholder.com/350x350'
  //   },
  //   {
  //     userId: 'ID',
  //     title: 'PostTitle',
  //     description: 'PostDescription',
  //     location: 'Derry',
  //     datePosted: 121205,
  //     likes: 32,
  //     interest: 12,
  //     active: true,
  //     expirationDate: 150505,
  //     image: 'http://via.placeholder.com/350x350'
  //   },
  //   {
  //     userId: 'ID',
  //     title: 'PostTitle',
  //     description: 'PostDescription',
  //     location: 'Derry',
  //     datePosted: 121205,
  //     likes: 32,
  //     interest: 12,
  //     active: true,
  //     expirationDate: 150505,
  //     image: 'http://via.placeholder.com/350x350'
  //   },
  //   {
  //     userId: 'ID',
  //     title: 'PostTitle',
  //     description: 'PostDescription',
  //     location: 'Derry',
  //     datePosted: 121205,
  //     likes: 32,
  //     interest: 12,
  //     active: true,
  //     expirationDate: 150505,
  //     image: 'http://via.placeholder.com/350x350'
  //   },
  //   {
  //     userId: 'ID',
  //     title: 'PostTitle',
  //     description: 'PostDescription',
  //     location: 'Derry',
  //     datePosted: 121205,
  //     likes: 32,
  //     interest: 12,
  //     active: true,
  //     expirationDate: 150505,
  //     image: 'http://via.placeholder.com/350x350'
  //   }
  // ];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getAll().subscribe(res => {
      this.cards = res;
    });
  }
}
