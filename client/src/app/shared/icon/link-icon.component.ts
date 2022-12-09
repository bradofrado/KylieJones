import { Component, Input } from '@angular/core';

@Component({
  selector: 'link-icon',
  templateUrl: './link-icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class LinkIconComponent {

    private urls: IconDictionary = {
        instagram: "https://www.instagram.com/runningsons/",
        facebook: "https://www.facebook.com/braydon.jones.330/",
        github: "https://github.com/bradofrado/RunningSons",
        spotify: "https://open.spotify.com/artist/4oUAnr1cEJYE4Zhl0TEQ8J",
        apple: "https://music.apple.com/us/artist/running-sons/1645664457",
        itunes: "https://music.apple.com/us/artist/running-sons/1645664457",
        amazon: "https://music.amazon.com/artists/B0BFSWSL79/running-sons",
        pandora: "https://www.pandora.com/artist/running-sons/AR4Z6mVblk2lf39",
        youtube: "https://github.com/bradofrado/RunningSons",
        linkedin: "https://linkedin.com"
    }

    @Input() icon!: Icon;
    @Input() class: string = '';

    get url(): string {
        const url = this.urls[this.icon];

        return url;
    }
}

export interface IconDictionary {
    instagram: string,
    facebook: string,
    github: string,
    spotify: string,
    apple: string,
    itunes: string,
    amazon: string,
    pandora: string,
    youtube: string,
    linkedin: string
}

export type Icon = keyof IconDictionary;
