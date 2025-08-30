import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladaLegumes } from './salada-legumes';

describe('SaladaLegumes', () => {
  let component: SaladaLegumes;
  let fixture: ComponentFixture<SaladaLegumes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaladaLegumes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaladaLegumes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
