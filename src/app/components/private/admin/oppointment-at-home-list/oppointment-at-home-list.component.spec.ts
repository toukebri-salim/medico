import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppointmentAtHomeListComponent } from './oppointment-at-home-list.component';

describe('OppointmentAtHomeListComponent', () => {
  let component: OppointmentAtHomeListComponent;
  let fixture: ComponentFixture<OppointmentAtHomeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OppointmentAtHomeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OppointmentAtHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
