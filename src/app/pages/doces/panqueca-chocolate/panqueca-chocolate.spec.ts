import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanquecaChocolate } from './panqueca-chocolate';

describe('PanquecaChocolate', () => {
  let component: PanquecaChocolate;
  let fixture: ComponentFixture<PanquecaChocolate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanquecaChocolate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanquecaChocolate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
