import { Component, Input } from '@angular/core';
import { IPortfolioItem } from 'src/app/shared/portfolio-item';

@Component({
  selector: 'app-edit-portfolio-item',
  templateUrl: './edit-portfolio-item.component.html',
  styleUrls: ['./edit-portfolio-item.component.css']
})
export class EditPortfolioItemComponent {
    @Input() item!: IPortfolioItem;
}
