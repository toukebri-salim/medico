import { TestBed } from '@angular/core/testing';

import { SecretaryGuard } from './secretary.guard';

describe('SecretaryGuard', () => {
  let guard: SecretaryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecretaryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
