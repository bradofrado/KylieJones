import { Component, Type } from '@angular/core';
import { ImageButtonComponent } from 'src/app/shared/image-button/image-button.component';
import { EditProfileComponent } from '../profile/edit-profile/edit-profile.component';
import { EditArtItemsComponent } from './edit-portfolio-items/edit-art-items.component';
import { EditEventItemsComponent } from './edit-portfolio-items/edit-event-items.component';
import { EditPortfolioItemsComponent } from './edit-portfolio-items/edit-portfolio-items.component';

@Component({
  selector: 'admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
    portfolioItems: Settings[] = [
        {
            name: 'Events',
            state: true,
            component: EditEventItemsComponent
        },
        {
            name: 'Art',
            state: false,
            component: EditArtItemsComponent
        }
    ];

    get component(): Type<any> | undefined {
        const setting = this.portfolioItems.find(x => x.state);
        return setting ? setting.component : undefined;
    }
}

interface Settings {
    name: string,
    state: boolean,
    component: Type<any>
}
