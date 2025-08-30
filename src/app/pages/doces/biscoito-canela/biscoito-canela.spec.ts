import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiscoitoCanela } from './biscoito-canela';

describe('BiscoitoCanela', () => {
  let component: BiscoitoCanela;
  let fixture: ComponentFixture<BiscoitoCanela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiscoitoCanela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiscoitoCanela);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
