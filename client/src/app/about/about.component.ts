import { Component, OnInit } from '@angular/core';
import { IAbout } from './about';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    constructor(private aboutService: AboutService) {}

    about!: IAbout;

    ngOnInit() {
        this.aboutService.getAbout().subscribe({
            next: about => this.about = about
        });
    }
}
