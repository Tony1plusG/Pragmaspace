import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Film} from '../../models/film-model';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  filmsArray: any;
  commentsInfo: any;

  async getFilmArray() {
    return this.filmsArray = await this.authenticationService.allFilms();
  }

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.getFilmArray();
  }

}
