import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() layoutOption: string;
  @Output() sortOption: string;

  constructor() {}

  ngOnInit() {}

  toList() {
    this.layoutOption = 'listView';
  }

  toCard() {
    this.layoutOption = 'cardView';
  }

  sortByLocation() {
    this.sortOption = 'location';
  }

  sortByTime() {
    this.layoutOption = 'time';
  }
}
