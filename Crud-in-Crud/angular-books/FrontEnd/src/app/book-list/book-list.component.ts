import {Component, OnInit} from '@angular/core';
import {ApiRequestsService} from '../api-requests.service';
import {Book} from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [{provide: ApiRequestsService, useClass: ApiRequestsService}]
})
export class BookListComponent implements OnInit {
  booksArray: any;
  async getBooksArray() {
    return this.booksArray = await this.apiRequestsService.apiGet('/api/books')
      .then(response => {
        const array = [];
        for (let i = 0; i < response.length; i++) {
          array[i] = response[i];
        }
        return array;
      });
  }
  constructor(private apiRequestsService: ApiRequestsService) {
  }

  ngOnInit() {
    this.getBooksArray();
  }
}
