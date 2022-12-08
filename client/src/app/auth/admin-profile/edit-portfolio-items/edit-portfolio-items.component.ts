import { Component, Input, OnInit, Type, ViewChild } from '@angular/core';
import { IEvent } from 'src/app/events/event';
import { EventService } from 'src/app/events/event.service';
import { ImageButtonComponent } from 'src/app/shared/image-button/image-button.component';
import { ToggleButtonState } from 'src/app/shared/toggle-button-group/toggle-button-state';
import { ToggleViewDirective } from 'src/app/shared/toggle-view.directive';
import { EditPortfolioItemComponent } from './edit-portfolio-item.component';

@Component({
  selector: 'edit-portfolio-items',
  templateUrl: './edit-portfolio-items.component.html',
  styleUrls: ['./edit-portfolio-items.component.css']
})
export class EditPortfolioItemsComponent implements OnInit {
    @ViewChild(ToggleViewDirective, {static: true}) viewChild!: ToggleViewDirective;

    _items: Settings[] = [];
    @Input() set items(value: Settings[]) {
        this._items = value;
        this.createComponent(value[0]);
    }
    get items(): Settings[] {
        return this._items;
    }

    ngOnInit(): void {
        //this.createComponent(this.items[0]);
    }

    onToggleClick(state: ToggleButtonState) {
        const setting = state as Settings;

        this.createComponent(setting);
    }

    createComponent(setting: Settings) {
        const container = this.viewChild.viewContainerRef;
        container.clear();
        const comp = container.createComponent<EditPortfolioItemComponent>(setting.component);
        comp.instance.item = setting.data;
    }
}

export interface Settings {
    name: string,
    state: boolean,
    component: Type<any>,
    data: IEvent
}
