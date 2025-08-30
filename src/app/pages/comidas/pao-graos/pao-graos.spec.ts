import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaoGraos } from './pao-graos';

describe('PaoGraos', () => {
  let component: PaoGraos;
  let fixture: ComponentFixture<PaoGraos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaoGraos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaoGraos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
