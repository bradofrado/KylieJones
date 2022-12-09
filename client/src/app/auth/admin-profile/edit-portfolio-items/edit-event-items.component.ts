import { Component, OnInit } from "@angular/core";
import { EventService } from "src/app/events/event.service";
import { ImageButtonComponent } from "src/app/shared/image-button/image-button.component";
import { EditPortfolioItemComponent } from "./edit-portfolio-item.component";
import { Settings } from "./edit-portfolio-items.component";

@Component({
    template: '<edit-portfolio-items [items]="items" title="Event Items"></edit-portfolio-items>'
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
                    data: x 
                }))
            })
    }
}