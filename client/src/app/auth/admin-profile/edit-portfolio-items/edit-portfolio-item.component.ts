import { Component, Input } from '@angular/core';
import { IPortfolioItem } from 'src/app/shared/portfolio-item';

@Component({
  selector: 'app-edit-portfolio-item',
  templateUrl: './edit-portfolio-item.component.html',
  styleUrls: ['./edit-portfolio-item.component.css']
})
export class EditPortfolioItemComponent {
    _item!: IPortfolioItem;
    @Input() get item(): IPortfolioItem {
        return this._item;
    }
    set item(value: IPortfolioItem) {
        this._item = value;
        this.title = value.name;
    }

    title!: string;
}
