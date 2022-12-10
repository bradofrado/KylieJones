import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { BaseService } from '../shared/base.service';
import { IAbout } from './about';

@Injectable({
  providedIn: 'root'
})
export class AboutService extends BaseService {
    getAbout() {
        return this.http.get<IAbout>('/api/about/about.json').pipe(
            catchError(this.handleError)
        );
    }
}
