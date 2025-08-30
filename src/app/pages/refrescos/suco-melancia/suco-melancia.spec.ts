import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucoMelancia } from './suco-melancia';

describe('SucoMelancia', () => {
  let component: SucoMelancia;
  let fixture: ComponentFixture<SucoMelancia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucoMelancia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucoMelancia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
