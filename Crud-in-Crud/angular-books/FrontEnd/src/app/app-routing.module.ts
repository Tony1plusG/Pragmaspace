import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreatebookComponent} from './createBook/createbook.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookInformationComponent} from './book-information/book-information.component';
import {BookRefactoringComponent} from './book-refactoring/book-refactoring.component';
import {AddCommentComponent} from './add-comment/add-comment.component';
import {CommentInformationComponent} from './comment-information/comment-information.component';
import {CommentRefactoringComponent} from './comment-refactoring/comment-refactoring.component';

const routes: Routes = [
  {path: 'createbook', component: CreatebookComponent},
  {path: 'createbook/book-list', component: BookListComponent},
  {path: 'createbook/book-list/book-information/:bookId', component: BookInformationComponent},
  {path: 'createbook/book-list/book-information/:bookId/book-refactoring', component: BookRefactoringComponent},
  {path: 'createbook/book-list/book-information/:bookId/add-comment', component: AddCommentComponent},
  {path: 'createbook/book-list/book-information/:bookId/comment-information/:commentId', component: CommentInformationComponent},
  {path: 'createbook/book-list/book-information/:bookId/comment-refactoring/:commentId', component: CommentRefactoringComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
