import { Component, Input } from '@angular/core';
import { Icon, IconDictionary } from './link-icon.component';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
    private icons: IconDictionary = {
        instagram: "fa-instagram",
        facebook: "fa-facebook",
        github: "fa-github",
        spotify: "fa-spotify",
        apple: "fa-apple",
        itunes: "fa-itunes",
        amazon: "fa-amazon",
        pandora: "fa-pandora",
        youtube: "fa-youtube",
        linkedin: "fa-linkedin"
    }

    @Input() icon!: Icon;
    @Input() class: string = '';

    get iconClass(): string {
        return this.icons[this.icon];
    }
}
