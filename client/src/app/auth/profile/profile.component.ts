import { Component, OnChanges, OnInit, SimpleChanges, Type, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleButtonState } from 'src/app/shared/toggle-button-group/toggle-button-state';
import { ToggleViewDirective } from 'src/app/shared/toggle-view.directive';
import { AdminProfileComponent } from '../admin-profile/admin-profile.component';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) {}
    @ViewChild(ToggleViewDirective, {static: true}) toggleView!: ToggleViewDirective;
    
    user!: User; 
    settings: Settings[] = [
        {
            name: 'Profile',
            state: true,
            component: EditProfileComponent
        }
    ]

    get isAdmin(): boolean {
        return this.user.roles ? this.user.roles.includes('admin') : false;
    }

    // get currSetting(): Settings | undefined {
    //     const setting = this.settings.find(x => x.state);
        
    //     return setting;
    // }

    ngOnInit() {
        let user = this.authService.getAuth();
        if (user) {
            this.user = user;
            if (this.isAdmin) {
                this.settings.push({name: 'Edit', state: false, component: AdminProfileComponent});
            }
        }

        const viewContainerRef = this.toggleView.viewContainerRef.createComponent<Type<any>>(this.settings[0].component);
    }

    onToggleChange(state: ToggleButtonState) {
        const setting = state as Settings;
        const viewContainerRef = this.toggleView.viewContainerRef;
        viewContainerRef.clear();

        viewContainerRef.createComponent<Type<any>>(setting.component);
    }

    onLogout(e: Event) {
        e.preventDefault();
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}

interface Settings  {
    name: string,
    state: boolean,
    component: Type<any>
}
