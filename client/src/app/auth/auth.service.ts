import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { BaseService } from '../shared/base.service';
import { SignupUser, User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
    private user: User | null = null;

    login(username: string, password: string) {
        let observable = this.http.post<User>('/api/users/login', {username, password}).pipe(
            catchError(this.handleError)
        );

        observable.subscribe({
            next: user => this.user = user
        });

        return observable;
    }

    signup(signup: SignupUser) {
        let observable = this.http.post<User>('/api/users', signup).pipe(
            catchError(this.handleError)
        );

        observable.subscribe({
            next: user => this.user = user
        });

        return observable;
    }

    logout() {
        return this.http.delete('/api/users').pipe(
            catchError(this.handleError)
        );
    }

    getAuth(): User | null {
        return this.user;
    }
}
