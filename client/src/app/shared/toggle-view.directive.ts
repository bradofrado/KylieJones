import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[toggle-view]'
})
export class ToggleViewDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
