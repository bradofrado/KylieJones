import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IArtWork } from '../art';
import { ArtService } from '../art.service';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit, OnDestroy {
    constructor(private artService: ArtService) {}

    artItems: IArtWork[] = [];
    sub!: Subscription;
    errorMessage: string = '';
    
    ngOnInit() {
        this.sub = this.artService.getArtItems().subscribe({
            next: artItems => this.artItems = artItems,
            error: error => this.errorMessage = error
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
