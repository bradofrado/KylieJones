import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { BaseService } from '../shared/base.service';
import { IArtWork } from './art';

@Injectable({
  providedIn: 'root'
})
export class ArtService extends BaseService {
    url = 'api/art/art.json';

    getArtItems() {
        return this.getPortfolioItems<IArtWork[]>(this.url);
    }

    getArtItem(id: string) {
        return this.getPortfolioItem<IArtWork>(this.url, id);
    }

    editArtItem(item: IArtWork) {
        alert(`editting ${item.name}`);
    }
}
