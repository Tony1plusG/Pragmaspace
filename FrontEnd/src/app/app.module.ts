import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService} from './services/inteceptor.service';
import { UserService} from './services/user.service';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmDetailsComponent } from './Films/film-details/film-details.component';
import { RentFilmDetailsComponent } from './RentFilms/rent-film-details/rent-film-details.component';
import { RentFilmListComponent } from './RentFilms/rent-film-list/rent-film-list.component';
import { FilmListComponent } from './Films/film-list/film-list.component';
import {SignInComponent} from './Users/sign-in/sign-in.component';
import {RegisterComponent} from './Users/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmDetailsComponent,
    RentFilmDetailsComponent,
    RentFilmListComponent,
    FilmListComponent,
    SignInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [UserService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
