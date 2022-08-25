import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.css']
})
export class BaseTableComponent implements OnInit {
  @Input() list: {}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
