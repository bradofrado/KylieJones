import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable } from 'rxjs';
import { EventService } from '../event.service';

@Injectable({
  providedIn: 'root'
})
export class EventDetailGuard implements CanActivate {
    constructor(private eventService: EventService) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
            const id = route.paramMap.get('id');
            if (id) {
                return this.eventService.getEvent(id).pipe(
                    map(event => true)
                );
            }

            return false;
    }
  
}
