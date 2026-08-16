import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecrivain } from './ecrivain';

describe('Ecrivain', () => {
  let component: Ecrivain;
  let fixture: ComponentFixture<Ecrivain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecrivain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ecrivain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
