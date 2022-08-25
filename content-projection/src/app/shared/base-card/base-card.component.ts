import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.css']
})
export class BaseCardComponent implements OnInit {
  @Input() item: {} = {};

  constructor() { }

  ngOnInit(): void {
  }

}
