import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppointmentUpdateComponent } from './oppointment-update.component';

describe('OppointmentUpdateComponent', () => {
  let component: OppointmentUpdateComponent;
  let fixture: ComponentFixture<OppointmentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OppointmentUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OppointmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
