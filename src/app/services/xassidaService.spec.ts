import { TestBed } from '@angular/core/testing';
import { XassidaService } from './xassidaService';



describe('Xassida', () => {
  let service: XassidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XassidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
