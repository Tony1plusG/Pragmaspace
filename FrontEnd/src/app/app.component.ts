import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterComponent} from './Users/register/register.component';
import {SignInComponent} from './Users/sign-in/sign-in.component';
import {AuthenticationService} from './services/authentication.service';
import {User} from './models/User-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/sign-in']);
  }

}
