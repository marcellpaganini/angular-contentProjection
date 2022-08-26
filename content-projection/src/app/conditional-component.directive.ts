import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appConditionalComponent]'
})
export class ConditionalComponentDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }

}
