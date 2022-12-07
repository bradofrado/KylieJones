import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { IEvent } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

    constructor(private http: HttpClient) { }

    getEvents() {
        return this.http.get<IEvent[]>('api/events/events.json').pipe(
            catchError(this.handleError)
        );
    }

    getEvent(id: string) {
        //TODO: uncomment this when the server is up and going
        // return this.http.get<IEvent>('/api/event/' + id).pipe(
        //     catchError(this.handleError)
        // );
        return this.getEvents().pipe(
            map((events: IEvent[]) => events.find(e => e._id == id))
        );
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote loggin infrastructur
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // the reponse body may contain clues as to what went wrong
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }

        console.error(errorMessage);
        return throwError(()=> errorMessage);
    }
}
