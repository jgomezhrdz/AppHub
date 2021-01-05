import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductorMusicaComponent } from './reproductor-musica.component';

describe('ReproductorMusicaComponent', () => {
  let component: ReproductorMusicaComponent;
  let fixture: ComponentFixture<ReproductorMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReproductorMusicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproductorMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
