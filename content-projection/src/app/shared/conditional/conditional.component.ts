import { Component, ContentChild, Directive, OnInit } from '@angular/core';
import { ConditionalComponentDirective } from 'src/app/conditional-component.directive';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})

export class ConditionalComponent implements OnInit {

  expanded = false;
  @ContentChild(ConditionalComponentDirective) content!: ConditionalComponentDirective;

  constructor() { }

  ngOnInit(): void {
  }

}
