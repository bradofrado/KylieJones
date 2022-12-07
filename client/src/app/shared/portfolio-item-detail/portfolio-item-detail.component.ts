import { Component, Input } from '@angular/core';
import { IPortfolioItem } from '../portfolio-item';

@Component({
  selector: 'portfolio-item-detail',
  templateUrl: './portfolio-item-detail.component.html',
  styleUrls: ['./portfolio-item-detail.component.css']
})
export class PortfolioItemDetailComponent {
    @Input() item: IPortfolioItem | undefined;
}
