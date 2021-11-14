import { TestBed } from '@angular/core/testing';

import { OppointmentService } from './oppointment.service';

describe('OppointmentService', () => {
  let service: OppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
