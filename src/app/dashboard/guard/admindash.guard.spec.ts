import { TestBed } from '@angular/core/testing';

import { AdmindashGuard } from './admindash.guard';

describe('AdmindashGuard', () => {
  let guard: AdmindashGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdmindashGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
