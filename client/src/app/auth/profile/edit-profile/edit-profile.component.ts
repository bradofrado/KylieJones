import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { User } from '../../user';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
    constructor(private authService: AuthService) {}

    user!: User;

    ngOnInit() {
        const user = this.authService.getAuth();
        if (user) {
            this.user = user;
        }
    }
}
