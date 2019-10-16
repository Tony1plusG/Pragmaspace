import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiRequestsService} from '../api-requests.service';

@Component({
  selector: 'app-book-information',
  templateUrl: './book-information.component.html',
  styleUrls: ['./book-information.component.css'],
  providers: [{provide: ApiRequestsService, useClass: ApiRequestsService}]
})
export class BookInformationComponent implements OnInit {
info: any;
commentsInfo: any;
id: string;

constructor(
  private route: ActivatedRoute,
  private apiRequestsService: ApiRequestsService
) {}

async ngOnInit() {
  this.id = this.route.snapshot.paramMap.get('bookId');
  this.info = await this.apiRequestsService.apiGetId(`/api/books/${this.id}`);
  this.commentsInfo = await this.apiRequestsService.apiGetId(`/api/comments/${this.id}`);
}
async deleteBook(id) {
    const deleteResult = await this.apiRequestsService.apiDelete(`/api/books/${id}`);
}
}
