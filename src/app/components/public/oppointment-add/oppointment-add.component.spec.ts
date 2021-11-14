import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppointmentAddComponent } from './oppointment-add.component';

describe('OppointmentAddComponent', () => {
  let component: OppointmentAddComponent;
  let fixture: ComponentFixture<OppointmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OppointmentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OppointmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
