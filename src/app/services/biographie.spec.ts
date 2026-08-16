import { TestBed } from '@angular/core/testing';

import { Biographie } from './biographie';

describe('Biographie', () => {
  let service: Biographie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Biographie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
