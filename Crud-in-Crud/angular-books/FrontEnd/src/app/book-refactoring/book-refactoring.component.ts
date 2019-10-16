import {Component, OnInit} from '@angular/core';
import {ApiRequestsService} from '../api-requests.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-refactoring',
  templateUrl: './book-refactoring.component.html',
  styleUrls: ['./book-refactoring.component.css'],
  providers: [{provide: ApiRequestsService, useClass: ApiRequestsService}]
})
export class BookRefactoringComponent implements OnInit {
  info: any;
  title: any;
  author: any;
  id: any;
  inputNewTitle: string;
  inputNewAuthor: string;

  constructor(
    private route: ActivatedRoute,
    private apiRequestsService: ApiRequestsService
  ) {}

  async TakeOldInformation() {
    this.id = this.route.snapshot.paramMap.get('bookId');
    this.info = await this.apiRequestsService.apiGetId(`/api/books/${this.id}`);
    this.title = this.info.title;
    this.author = this.info.author;
  }

  async changeBookInformation(): Promise<Promise<any>> {
    const title = this.inputNewTitle;
    const author = this.inputNewAuthor;

    const changeBookInformation = await this.apiRequestsService.apiPut(`/api/books/${this.id}`, {title, author});
  }

  ngOnInit() {
    this.TakeOldInformation();
  }

}
