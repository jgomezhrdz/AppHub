import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorVideosComponent } from './buscador-videos.component';

describe('BuscadorVideosComponent', () => {
  let component: BuscadorVideosComponent;
  let fixture: ComponentFixture<BuscadorVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
