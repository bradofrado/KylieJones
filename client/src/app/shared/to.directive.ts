import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[to]'
})
export class ToDirective {

    constructor(private router: Router) { }

    @HostListener('click') onClick(): void {
        this.router.navigate([this.to]);
    }

    @Input() to = '';
}
