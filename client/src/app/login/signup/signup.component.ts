import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../login.component.css']
})
export class SignupComponent {
    errorMessage: string = '';
    private _firstname: string = '';
    private _lastname: string = '';
    private _username: string = '';
    private _password: string = '';
    private _repassword: string = '';
    private _email: string = '';

    get firstname(): string {
        return this._firstname;
    }
    set firstname(value: string) {
        this._firstname = value;
        if (this.validate([])) {
            this.errorMessage = '';
        }
    }
    get lastname(): string {
        return this._lastname;
    }
    set lastname(value: string) {
        this._lastname = value;
        if (this.validate([])) {
            this.errorMessage = '';
        }
    }
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
    get repassword(): string {
        return this._repassword;
    }
    set repassword(value: string) {
        this._repassword = value;
        if (this.validate([])) {
            this.errorMessage = '';
        }
    }
    get email(): string {
        return this._email;
    }
    set email(value: string) {
        this._email = value;
        if (this.validate([])) {
            this.errorMessage = '';
        }
    }

    onSignup(e: Event) {
        e.preventDefault();

        let validate: string[] = [];
        if (this.validate(validate)) {
            
        } else {
            this.errorMessage = validate[0];
        }
    }

    private validate(validate: string[]): boolean {
        if (!this.username || !this.email || !this.firstname || !this.lastname || 
            !this.password || !this.repassword) 
        {
            validate.push("Please enter in all fields");
            return false;
        }

        if (this.password != this.repassword) {
            validate.push('Passwords must match');
            return false;
        }

        return true;
    }
}
