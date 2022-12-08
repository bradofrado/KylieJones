import { Directive, Input, OnChanges, SimpleChanges, Type, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[toggle-view]'
})
export class ToggleViewDirective implements OnChanges {
    constructor(public viewContainerRef: ViewContainerRef) { }

    @Input() component: Type<any> | undefined;

    ngOnChanges(changes: SimpleChanges): void {
        const component = changes['component'].currentValue;
        this.viewContainerRef.clear();
        const s = this.viewContainerRef.createComponent<Type<any>>(component);
    }
}
