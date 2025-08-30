import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucoManga } from './suco-manga';

describe('SucoManga', () => {
  let component: SucoManga;
  let fixture: ComponentFixture<SucoManga>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucoManga]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucoManga);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
