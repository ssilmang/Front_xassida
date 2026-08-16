import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xassida } from './xassida';

describe('Xassida', () => {
  let component: Xassida;
  let fixture: ComponentFixture<Xassida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Xassida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Xassida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
