import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentFilmListComponent } from './rent-film-list.component';

describe('RentFilmListComponent', () => {
  let component: RentFilmListComponent;
  let fixture: ComponentFixture<RentFilmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentFilmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentFilmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
