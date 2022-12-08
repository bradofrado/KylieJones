import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    constructor(private authService: AuthService) {}
    user!: User; 

    ngOnInit() {
        let user = this.authService.getAuth();
        if (user) {
            this.user = user;
        }
    }
}
