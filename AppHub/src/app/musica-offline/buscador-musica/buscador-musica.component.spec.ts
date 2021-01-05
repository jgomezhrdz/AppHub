import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorMusicaComponent } from './buscador-musica.component';

describe('BuscadorMusicaComponent', () => {
  let component: BuscadorMusicaComponent;
  let fixture: ComponentFixture<BuscadorMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorMusicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
