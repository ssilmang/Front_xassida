import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterCard } from './writer-card';

describe('WriterCard', () => {
  let component: WriterCard;
  let fixture: ComponentFixture<WriterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriterCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriterCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
