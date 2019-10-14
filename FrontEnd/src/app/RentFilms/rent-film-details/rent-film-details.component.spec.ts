import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentFilmDetailsComponent } from './rent-film-details.component';

describe('RentFilmDetailsComponent', () => {
  let component: RentFilmDetailsComponent;
  let fixture: ComponentFixture<RentFilmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentFilmDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentFilmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
