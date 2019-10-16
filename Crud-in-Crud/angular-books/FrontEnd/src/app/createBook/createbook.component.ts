import {Component, OnInit} from '@angular/core';
import {ApiRequestsService} from '../api-requests.service';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css'],
  providers: [{provide: ApiRequestsService, useClass: ApiRequestsService}]
})

export class CreatebookComponent implements OnInit {
  inputTitle: string;
  inputAuthor: string;

  constructor(private apiRequestsService: ApiRequestsService) {
  }

  ngOnInit() {
  }

  async postMethod(): Promise<Promise<any>> {
    const title = this.inputTitle;
    const author = this.inputAuthor;

    const addBookToDB = await this.apiRequestsService.apiPost('/api/books', {title, author});
  }
}
