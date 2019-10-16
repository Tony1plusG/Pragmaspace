import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatebookComponent } from './createBook/createbook.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookInformationComponent } from './book-information/book-information.component';
import { BookRefactoringComponent } from './book-refactoring/book-refactoring.component';
import {FormsModule} from '@angular/forms';
import {ApiRequestsService} from './api-requests.service';

import {ReflectiveInjector, Injector} from '@angular/core';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentInformationComponent } from './comment-information/comment-information.component';
import { CommentRefactoringComponent } from './comment-refactoring/comment-refactoring.component';

const injector: Injector = ReflectiveInjector.resolveAndCreate([{provide: ApiRequestsService, useClass: ApiRequestsService}]);
const apiRequestsService = injector.get(ApiRequestsService);

@NgModule({
  declarations: [
    AppComponent,
    CreatebookComponent,
    BookListComponent,
    BookInformationComponent,
    BookRefactoringComponent,
    AddCommentComponent,
    CommentInformationComponent,
    CommentRefactoringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: ApiRequestsService, useClass: ApiRequestsService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
