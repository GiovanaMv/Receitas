import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucoCenoura } from './suco-cenoura';

describe('SucoCenoura', () => {
  let component: SucoCenoura;
  let fixture: ComponentFixture<SucoCenoura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucoCenoura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucoCenoura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
