import {Component, OnInit} from '@angular/core';
import {ApiRequestsService} from '../api-requests.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
  providers: [{provide: ApiRequestsService, useClass: ApiRequestsService}]
})
export class AddCommentComponent implements OnInit {
  inputComment: string;
  id: string;

  constructor(
    private apiRequestsService: ApiRequestsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('bookId');
  }

  async postMethod(comment, commentID): Promise<Promise<any>> {
    const addCommentToDB = await this.apiRequestsService.apiPost(`/api/comments`, {comment, commentID});
  }
}
