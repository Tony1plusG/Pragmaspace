import {Component, OnInit} from '@angular/core';
import {ApiRequestsService} from '../api-requests.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comment-information',
  templateUrl: './comment-information.component.html',
  styleUrls: ['./comment-information.component.css'],
  providers: [{provide: ApiRequestsService, useClass: ApiRequestsService}]
})
export class CommentInformationComponent implements OnInit {
  commentInfo: any;
  id: string;
  bookId: string;

  constructor(
    private route: ActivatedRoute,
    private apiRequestsService: ApiRequestsService
  ) {
  }

async ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('bookId');
    this.id = this.route.snapshot.paramMap.get('commentId');
    this.commentInfo = await this.apiRequestsService.apiGetId(`/api/comment/${this.id}`);
  }
  async deleteComment(commentId) {
    const deleteComment = await this.apiRequestsService.apiDelete(`/api/comments/${commentId}`);
  }
}
