import { Component } from '@angular/core';
import { IEvent } from '../event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
    events: IEvent[] = [
        {
            img: "assets/ChalkItUp.jpeg",
            name: "Chalk it Up",
            description: "A fun time",
            _id: "0"
        },
        {
            img: "assets/ChalkItUp2.jpeg",
            name: "Another Chalk",
            description: "More yes please!",
            _id: "1"
        }
    ];
}
