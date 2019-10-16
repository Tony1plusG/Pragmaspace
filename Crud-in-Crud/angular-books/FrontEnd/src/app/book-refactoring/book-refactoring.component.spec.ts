import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRefactoringComponent } from './book-refactoring.component';

describe('FourthSheetComponent', () => {
  let component: BookRefactoringComponent;
  let fixture: ComponentFixture<BookRefactoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRefactoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRefactoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
