import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    private _username: string = '';
    private _password: string = '';

    get username(): string {
        return this._username;
    }
    set username(value: string) {
        this._username = value;
        if (this.validate([])) {
            this.errorMessage = '';
        }
    }
    get password(): string {
        return this._password;
    }
    set password(value: string) {
        this._password = value;
        if (this.validate([])) {
            this.errorMessage = '';
        }
    }

    errorMessage: string = '';

    onLogin(e: Event) {
        e.preventDefault();

        let validate: string[] = [];
        if (this.validate(validate)) {
            this.login(this.username, this.password);
        } else {
            this.errorMessage = validate[0];
        }
    }

    private login(username: string, password: string): void {

    }

    private validate(validate: string[]): boolean {
        if (!this.username || !this.password) {
            validate.push('Must enter username and password');
            return false;
        }

        return true;
    }
}
