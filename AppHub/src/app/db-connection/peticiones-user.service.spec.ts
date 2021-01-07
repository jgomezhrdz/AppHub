import { TestBed } from '@angular/core/testing';

import { PeticionesUserService } from './peticiones-user.service';

describe('PeticionesUserService', () => {
  let service: PeticionesUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionesUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
