import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOppointmentAtHomeComponent } from './add-oppointment-at-home.component';

describe('AddOppointmentAtHomeComponent', () => {
  let component: AddOppointmentAtHomeComponent;
  let fixture: ComponentFixture<AddOppointmentAtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOppointmentAtHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOppointmentAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
