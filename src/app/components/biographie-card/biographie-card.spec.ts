import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographieCard } from './biographie-card';

describe('BiographieCard', () => {
  let component: BiographieCard;
  let fixture: ComponentFixture<BiographieCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiographieCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiographieCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
