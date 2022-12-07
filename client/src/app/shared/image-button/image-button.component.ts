import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.css']
})
export class ImageButtonComponent {
    @Input() title: string = '';
    @Input() img: string = '';
    @Input() dark: boolean = false;
    @Input() class: string = '';
    @Input() buttonClass: string = '';
    @Input() to: string = '';
    @Input() name: string = '';

    @Output()
    onClick(): void {

    }
}
