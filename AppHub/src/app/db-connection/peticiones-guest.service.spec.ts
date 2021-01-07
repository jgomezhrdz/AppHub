import { TestBed } from '@angular/core/testing';

import { PeticionesGuestService } from './peticiones-guest.service';

describe('PeticionesGuestService', () => {
  let service: PeticionesGuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionesGuestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
