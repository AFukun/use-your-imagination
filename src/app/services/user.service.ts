import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  get username() {
    return this.userSubject.value.username;
  }

  login(username: string, password: string) {
    const mockUser: User = {
      username: username,
      password: password,
      fullname: 'Anyone'
    };
    localStorage.setItem('user', JSON.stringify(mockUser));
    return mockUser;
    /* return this.http
      .post<User>(`authenticate`, { username, password })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );*/
  }

  register(user: User) {
    return "200 OK";
    // return this.http.post(`register`, user);
  }
}
