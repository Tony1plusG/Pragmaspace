import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {User} from '../models/User-model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`/auth`, user);
  }
}
