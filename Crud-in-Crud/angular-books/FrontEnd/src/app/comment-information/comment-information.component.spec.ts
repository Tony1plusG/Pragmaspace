import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentInformationComponent } from './comment-information.component';

describe('CommentInformationComponent', () => {
  let component: CommentInformationComponent;
  let fixture: ComponentFixture<CommentInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
