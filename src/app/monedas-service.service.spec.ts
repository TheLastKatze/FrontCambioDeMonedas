import { TestBed } from '@angular/core/testing';

import { MonedasServiceService } from './monedas-service.service';

describe('MonedasServiceService', () => {
  let service: MonedasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonedasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
