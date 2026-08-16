import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementCard } from './evenement-card';

describe('EvenementCard', () => {
  let component: EvenementCard;
  let fixture: ComponentFixture<EvenementCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenementCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenementCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
