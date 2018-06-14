import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})

export class CardListComponent implements OnInit {
  cards: Post[] = [
    new Post('ID', 'PostTitle', 'PostDescription', 'Derry', 121205, 32, 12, true, 150505, 'https://i.imgur.com/RmoqGao.jpg'),
    new Post('AnotherID', 'AnotherPostTitle', 'AnotherPostDescription', 'Derry', 121205, 32, 12, true, 150505, 'https://i.imgur.com/BGykAkB.jpg'),
    new Post('ID', 'PostTitle', 'PostDescription', 'Derry', 121205, 32, 12, true, 150505, 'https://i.imgur.com/RmoqGao.jpg'),
    new Post('ID', 'PostTitle', 'PostDescription', 'Derry', 121205, 32, 12, true, 150505, 'https://i.imgur.com/RmoqGao.jpg'),
    new Post('ID', 'PostTitle', 'PostDescription', 'Derry', 121205, 32, 12, true, 150505, 'https://i.imgur.com/RmoqGao.jpg'),
    new Post('ID', 'PostTitle', 'PostDescription', 'Derry', 121205, 32, 12, true, 150505, 'https://i.imgur.com/RmoqGao.jpg'),
    new Post('ID', 'PostTitle', 'PostDescription', 'Derry', 121205, 32, 12, true, 150505, 'https://i.imgur.com/RmoqGao.jpg'),
    new Post('ID', 'PostTitle', 'PostDescription', 'Derry', 121205, 32, 12, true, 150505, 'https://i.imgur.com/RmoqGao.jpg'),
    new Post('ID', 'PostTitle', 'PostDescription', 'Derry', 121205, 32, 12, true, 150505, 'https://i.imgur.com/RmoqGao.jpg'),
    new Post('ID', 'PostTitle', 'PostDescription', 'Derry', 121205, 32, 12, true, 150505, 'https://i.imgur.com/RmoqGao.jpg'),
    new Post('ID', 'PostTitle', 'PostDescription', 'Derry', 121205, 32, 12, true, 150505, 'https://i.imgur.com/RmoqGao.jpg'),
    
  ];

  constructor() { }

  ngOnInit() {

  }
}
