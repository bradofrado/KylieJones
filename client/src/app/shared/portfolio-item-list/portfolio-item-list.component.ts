import { Component, Input, OnInit } from '@angular/core';
import { IPortfolioItem } from '../portfolio-item';

@Component({
  selector: 'portfolio-item-list',
  templateUrl: './portfolio-item-list.component.html',
  styleUrls: ['./portfolio-item-list.component.css']
})
export class PortfolioItemListComponent {

    @Input() baseUrl: string | undefined;
    @Input() items: IPortfolioItem[] = [];
}
