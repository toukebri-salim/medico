import { TestBed } from '@angular/core/testing';

import { OppointmentHomeService } from './oppointment-home.service';

describe('OppointmentHomeService', () => {
  let service: OppointmentHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OppointmentHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
