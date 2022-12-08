import { Component } from '@angular/core';
import { ToggleButtonState } from 'src/app/shared/toggle-button-group/toggle-button-state';

@Component({
  selector: 'admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
    portfolioItems: ToggleButtonState[] = [
        {
            name: 'Events',
            state: true
        },
        {
            name: 'Art',
            state: false
        }
    ]
}
