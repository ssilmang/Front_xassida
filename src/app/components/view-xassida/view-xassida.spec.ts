import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewXassida } from './view-xassida';

describe('ViewXassida', () => {
  let component: ViewXassida;
  let fixture: ComponentFixture<ViewXassida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewXassida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewXassida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
