import { TestBed } from '@angular/core/testing';

import { ListaVideosService } from './lista-videos.service';

describe('ListaVideosService', () => {
  let service: ListaVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
