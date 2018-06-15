import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: Post[] = [
    {
      userId: 'ID',
      title: 'PostTitle',
      description: 'PostDescription',
      location: 'Derry',
      datePosted: 121205,
      likes: 32,
      interest: 12,
      active: true,
      expirationDate: 150505,
      image: 'http://via.placeholder.com/350x350'
    },
    {
      userId: 'ID',
      title: 'PostTitle',
      description: 'PostDescription',
      location: 'Derry',
      datePosted: 121205,
      likes: 32,
      interest: 12,
      active: true,
      expirationDate: 150505,
      image: 'http://via.placeholder.com/350x350'
    },
    {
      userId: 'ID',
      title: 'PostTitle',
      description: 'PostDescription',
      location: 'Derry',
      datePosted: 121205,
      likes: 32,
      interest: 12,
      active: true,
      expirationDate: 150505,
      image: 'http://via.placeholder.com/350x350'
    },
    {
      userId: 'ID',
      title: 'PostTitle',
      description: 'PostDescription',
      location: 'Derry',
      datePosted: 121205,
      likes: 32,
      interest: 12,
      active: true,
      expirationDate: 150505,
      image: 'http://via.placeholder.com/350x350'
    },
    {
      userId: 'ID',
      title: 'PostTitle',
      description: 'PostDescription',
      location: 'Derry',
      datePosted: 121205,
      likes: 32,
      interest: 12,
      active: true,
      expirationDate: 150505,
      image: 'http://via.placeholder.com/350x350'
    },
    {
      userId: 'ID',
      title: 'PostTitle',
      description: 'PostDescription',
      location: 'Derry',
      datePosted: 121205,
      likes: 32,
      interest: 12,
      active: true,
      expirationDate: 150505,
      image: 'http://via.placeholder.com/350x350'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
