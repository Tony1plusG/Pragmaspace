import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentRefactoringComponent } from './comment-refactoring.component';

describe('CommentRefactoringComponent', () => {
  let component: CommentRefactoringComponent;
  let fixture: ComponentFixture<CommentRefactoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentRefactoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentRefactoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
