import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {User} from '../models/User-model';
import {Film} from '../models/film-model';

@Injectable({providedIn: 'root'})

export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  filmsArray: Film[] = [];
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(Login: string, Password: string) {
    return this.http.post<any>(`/login`, {Login, Password})
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('token', JSON.stringify(user.result));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }
  allFilms() {
    return  this.http.get('/api/v1/film');
  }
  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
}
