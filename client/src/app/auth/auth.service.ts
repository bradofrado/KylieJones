import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { BaseService } from '../shared/base.service';
import { User } from './user';

const users: User[] = [
    {
        firstname: 'Braydon',
        lastname: 'Jones',
        email: 'bradofrado@gmail.com',
        username: 'bradofrado',
        password: 'eBay',
        roles: ['admin']
    },
    {
        firstname: 'Test',
        lastname: 'User',
        email: 'test@gmail.com',
        username: 'test',
        password: '1234',
    }
];

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
    private user: User | null = users[0];

    login(username: string, password: string) {
        // let observable = this.http.post<User>('/api/users/login', {username, password}).pipe(
        //     catchError(this.handleError)
        // );

        // observable.subscribe({
        //     next: user => this.user = user
        // });

        // return observable;
        let user = users.find(u => u.username == username && u.password == password);
        if (user) {
            this.user = user;
        } else {
            this.user = null;
            throw new Error("Invalid username or password");
        }
    }

    signup(signup: User) {
        // let observable = this.http.post<User>('/api/users', signup).pipe(
        //     catchError(this.handleError)
        // );

        // observable.subscribe({
        //     next: user => this.user = user
        // });

        // return observable;

        users.push(signup);
        this.user = signup;
    }

    logout() {
        // return this.http.delete('/api/users').pipe(
        //     catchError(this.handleError)
        // );
        this.user = null;
    }

    getAuth(): User | null {
        return this.user;
    }
}
