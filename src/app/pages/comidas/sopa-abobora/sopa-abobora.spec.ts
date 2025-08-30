import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopaAbobora } from './sopa-abobora';

describe('SopaAbobora', () => {
  let component: SopaAbobora;
  let fixture: ComponentFixture<SopaAbobora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SopaAbobora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SopaAbobora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
