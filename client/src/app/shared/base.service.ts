import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { IPortfolioItem } from './portfolio-item';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

    constructor(protected http: HttpClient) { }

    protected getPortfolioItems<Type>(url: string) {
        return this.http.get<IPortfolioItem[]>(url).pipe(
            map(items => items as Type),
            catchError(this.handleError)
        )
    }

    protected getPortfolioItem<Type extends IPortfolioItem>(url: string, id: string) {
        return this.getPortfolioItems<Type[]>(url).pipe(
            map((items: Type[]) => items.find(e => e._id == id))
        );
    }

    protected handleError(err: HttpErrorResponse) {
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
