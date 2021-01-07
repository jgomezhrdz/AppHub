import { TestBed } from '@angular/core/testing';

import { FachadaPeticionesService } from './fachada-peticiones.service';

describe('FachadaPeticionesService', () => {
  let service: FachadaPeticionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FachadaPeticionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
