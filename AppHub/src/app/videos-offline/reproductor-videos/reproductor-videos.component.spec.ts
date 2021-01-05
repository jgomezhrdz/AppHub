import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductorVideosComponent } from './reproductor-videos.component';

describe('ReproductorVideosComponent', () => {
  let component: ReproductorVideosComponent;
  let fixture: ComponentFixture<ReproductorVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReproductorVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproductorVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
