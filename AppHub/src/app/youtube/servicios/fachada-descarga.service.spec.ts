import { TestBed } from '@angular/core/testing';

import { FachadaDescargaService } from './fachada-descarga.service';

describe('FachadaDescargaService', () => {
  let service: FachadaDescargaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FachadaDescargaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
