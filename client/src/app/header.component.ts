import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User } from './auth/user';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private authService: AuthService) {}

    get user(): User | null {
        return this.authService.getAuth();
    }
}
