import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPortfolioItem } from 'src/app/shared/portfolio-item';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

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
        this._item = {...value};
        this.title = value.name;
    }

    @Output() submit: EventEmitter<IPortfolioItem> = new EventEmitter<IPortfolioItem>();

    title!: string;
    errorMessage: string = '';

    onSubmit(e: Event) {
        e.preventDefault();

        if (this.validate(this.item)) {
            this.submit.emit(this.item);
        }
    }

    onDelete(img: string) {
        const index = this.item.images.indexOf(img);

        if (index > -1) {
            this.item.images.splice(index, 1);
        }
    }

    onFile(e: any) {
        const files: File[] = e.target.files;
        const item = this.item;

        for (let file of files) {
            var reader = new FileReader();
            reader.onload = function(){
                if (typeof(reader.result) == 'string')
                    item.images.push(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.item.images, event.previousIndex, event.currentIndex);
    }

    validate(item: IPortfolioItem) {
        if (!item.name || !item.description || !item.images || item.images.length == 0) {
            this.errorMessage = "Must enter all fields";
            return false;
        }
        
        return true;
    }
}
