import { TestBed } from '@angular/core/testing';

import { ListaCancionesService } from './lista-canciones.service';

describe('ListaCancionesService', () => {
  let service: ListaCancionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCancionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
