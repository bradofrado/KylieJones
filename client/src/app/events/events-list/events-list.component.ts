import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEvent } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit, OnDestroy {
    constructor(private eventService: EventService) {}

    errorMessage: string = '';
    sub!: Subscription;

    events: IEvent[] = [];

    ngOnInit(): void {
        this.sub = this.eventService.getEvents().subscribe({
            next: events => this.events = events,
            error: err => this.errorMessage = err
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
