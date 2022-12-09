import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { BaseService } from '../shared/base.service';
import { IEvent } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService {
    private url = 'api/events/events.json';

    getEvents() {
        // return this.http.get<IEvent[]>('api/events/events.json').pipe(
        //     catchError(this.handleError)
        // );
        return this.getPortfolioItems<IEvent[]>(this.url);
    }

    getEvent(id: string) {
        //TODO: uncomment this when the server is up and going
        // return this.http.get<IEvent>('/api/event/' + id).pipe(
        //     catchError(this.handleError)
        // );
        return this.getPortfolioItem<IEvent>(this.url, id);
    }

    editEvent(item: IEvent) {
        alert(`editting ${item.name}`);
    }
}
