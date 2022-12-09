import { Component, OnInit } from "@angular/core";
import { IEvent } from "src/app/events/event";
import { EventService } from "src/app/events/event.service";
import { ImageButtonComponent } from "src/app/shared/image-button/image-button.component";
import { IPortfolioItem } from "src/app/shared/portfolio-item";
import { EditPortfolioItemComponent } from "./edit-portfolio-item.component";
import { Settings } from "./edit-portfolio-items.component";

@Component({
    template: '<edit-portfolio-items [items]="items" title="Event Items" (add)="onAdd()"></edit-portfolio-items>'
})
export class EditEventItemsComponent implements OnInit {
    constructor(private service: EventService) {}
    items!: Settings[];

    ngOnInit(): void {
        let sub = this.service.getEvents().subscribe({
            next: items => this.items = items.map((x, i) => (
                {
                    name: x.name, 
                    state: i == 0, 
                    component: EditPortfolioItemComponent,
                    data: x,
                    submit: this.onSubmit.bind(this)
                }))
            })
    }

    onAdd() {
        this.items.forEach(x => x.state = false);
        const newItem: IEvent = {
            name: 'New Event',
            description: '[description',
            _id: '',
            images: []
        }
        this.items.push({
            name: newItem.name,
            state: true,
            component: EditPortfolioItemComponent,
            data: newItem,
            submit: this.onSubmit.bind(this)
        })
    }

    onSubmit(item: IPortfolioItem) {
        this.service.editEvent(item);
    }
}