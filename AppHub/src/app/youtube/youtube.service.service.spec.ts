import { TestBed } from '@angular/core/testing';

import { Youtube.ServiceService } from './youtube.service.service';

describe('Youtube.ServiceService', () => {
  let service: Youtube.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Youtube.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
