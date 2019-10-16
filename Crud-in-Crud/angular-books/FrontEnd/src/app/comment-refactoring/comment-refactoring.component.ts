import {Component, OnInit} from '@angular/core';
import {ApiRequestsService} from '../api-requests.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comment-refactoring',
  templateUrl: './comment-refactoring.component.html',
  styleUrls: ['./comment-refactoring.component.css'],
  providers: [{provide: ApiRequestsService, useClass: ApiRequestsService}]
})
export class CommentRefactoringComponent implements OnInit {
  commentInfo: any;
  comments: any;
  id: any;
  bookId: string;
  inputNewComment: string;

  constructor(
    private route: ActivatedRoute,
    private apiRequestsService: ApiRequestsService
  ) {
  }

  async TakeOldInformation() {
    this.bookId = this.route.snapshot.paramMap.get('bookId');
    this.id = this.route.snapshot.paramMap.get('commentId');
    this.commentInfo = await this.apiRequestsService.apiGetId(`/api/comment/${this.id}`);
    this.comments = this.commentInfo.comment;
  }

  async changeCommentInformation(): Promise<Promise<any>> {
    const comment = this.inputNewComment;

    const changeBookInformation = await this.apiRequestsService.apiPut(`/api/comments/${this.id}`, {comment});
  }

  ngOnInit() {
    this.TakeOldInformation();
  }

}
