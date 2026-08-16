import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarikha } from './tarikha';

describe('Tarikha', () => {
  let component: Tarikha;
  let fixture: ComponentFixture<Tarikha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarikha]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarikha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
