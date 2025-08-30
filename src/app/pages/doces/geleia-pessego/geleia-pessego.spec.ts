import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeleiaPessego } from './geleia-pessego';

describe('GeleiaPessego', () => {
  let component: GeleiaPessego;
  let fixture: ComponentFixture<GeleiaPessego>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeleiaPessego]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeleiaPessego);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
