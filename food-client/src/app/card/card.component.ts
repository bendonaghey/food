import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Post;

  constructor() {}

  ngOnInit() {
    console.log(this.card);
  }
}
