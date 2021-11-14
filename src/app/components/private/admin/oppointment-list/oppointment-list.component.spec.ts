import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppointmentListComponent } from './oppointment-list.component';

describe('OppointmentListComponent', () => {
  let component: OppointmentListComponent;
  let fixture: ComponentFixture<OppointmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OppointmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
