import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEvent } from '../event';
import { EventService } from '../event.service';

@Component({
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit, OnDestroy {
    constructor(private eventService: EventService, private route: ActivatedRoute) {}

    event: IEvent | undefined;
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
        this.sub = this.eventService.getEvent(id).subscribe({
            next: event => this.event = event,
            error: err => this.errorMessage = err
        })
    }
}
