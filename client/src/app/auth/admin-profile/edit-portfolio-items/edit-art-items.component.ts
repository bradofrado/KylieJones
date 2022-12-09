import { Component, OnInit } from "@angular/core";
import { ArtService } from "src/app/art/art.service";
import { ImageButtonComponent } from "src/app/shared/image-button/image-button.component";
import { IPortfolioItem } from "src/app/shared/portfolio-item";
import { EditPortfolioItemComponent } from "./edit-portfolio-item.component";
import { Settings } from "./edit-portfolio-items.component";

@Component({
    template: '<edit-portfolio-items [items]="items" title="Art Items"></edit-portfolio-items>'
})
export class EditArtItemsComponent implements OnInit {
    constructor(private service: ArtService) {}
    items!: Settings[];

    ngOnInit(): void {
        let sub = this.service.getArtItems().subscribe({
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

    onSubmit(item: IPortfolioItem) {
        this.service.editArtItem(item);
    }
}