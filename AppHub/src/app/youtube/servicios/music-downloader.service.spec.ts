import { TestBed } from '@angular/core/testing';

import { MusicDownloaderService } from './music-downloader.service';

describe('MusicDownloaderService', () => {
  let service: MusicDownloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicDownloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
