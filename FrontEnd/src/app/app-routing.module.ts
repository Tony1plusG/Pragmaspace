import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './Users/sign-in/sign-in.component';
import {RegisterComponent} from './Users/register/register.component';
import {FilmDetailsComponent} from './Films/film-details/film-details.component';
import {RentFilmDetailsComponent} from './RentFilms/rent-film-details/rent-film-details.component';
import {FilmListComponent} from './Films/film-list/film-list.component';
import {RentFilmListComponent} from './RentFilms/rent-film-list/rent-film-list.component';
import {AuthenticatedComponent} from './authenticated/authenticated.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: '', component: AppComponent, canActivate: [AuthenticatedComponent]},
  {path: 'films-list', component: FilmListComponent},
  {path: 'film-details', component: FilmDetailsComponent},
  {path: 'rent-films-list', component: RentFilmListComponent},
  {path: 'rent-film-details', component: RentFilmDetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
