import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XassidaCard } from './xassida-card';

describe('XassidaCard', () => {
  let component: XassidaCard;
  let fixture: ComponentFixture<XassidaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XassidaCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XassidaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
