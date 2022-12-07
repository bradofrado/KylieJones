import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IArtWork } from '../art';
import { ArtService } from '../art.service';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css']
})
export class ArtDetailComponent {
    constructor(private artService: ArtService, private route: ActivatedRoute) {}

    artItem: IArtWork | undefined;
    errorMessage: string = '';

    private sub!: Subscription;

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.getProduct(id);
        }
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    private getProduct(id: string): void {
        this.sub = this.artService.getArtItem(id).subscribe({
            next: artItem => this.artItem = artItem,
            error: err => this.errorMessage = err
        })
    }
}
