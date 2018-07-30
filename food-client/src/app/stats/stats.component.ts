import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  users = 0;
  posts = 1;
  pickups = 225;

  constructor() {}

  ngOnInit() {

  }
}
