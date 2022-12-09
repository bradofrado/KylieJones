import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, Type, ViewChild } from '@angular/core';
import { IEvent } from 'src/app/events/event';
import { EventService } from 'src/app/events/event.service';
import { ImageButtonComponent } from 'src/app/shared/image-button/image-button.component';
import { IPortfolioItem } from 'src/app/shared/portfolio-item';
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

        if (value && value.length > 0) {
            this.createComponent(value[0]);
        }
    }
    get items(): Settings[] {
        return this._items;
    }

    get setting(): Settings | undefined {
        return this.items && this.items.find(x => x.state);
    }
    
    @Input() title: string = 'Portfolio Items';
    @Output() add: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit(): void {
        //this.createComponent(this.items[0]);
    }

    onToggleClick(state: ToggleButtonState) {
        const setting = state as Settings;

        this.createComponent(setting);
    }

    onAdd() {
        this.add.emit();
        this.createComponent(this.setting);
    }

    createComponent(setting: Settings | undefined) {
        if (!setting) return;
        
        const container = this.viewChild.viewContainerRef;
        container.clear();
        const comp = container.createComponent<EditPortfolioItemComponent>(setting.component);
        comp.instance.item = setting.data;
        comp.instance.submit.subscribe(item => setting.submit(item));
    }
}

export interface Settings {
    name: string,
    state: boolean,
    component: Type<any>,
    data: IPortfolioItem,
    submit(item: IPortfolioItem): void;
}
