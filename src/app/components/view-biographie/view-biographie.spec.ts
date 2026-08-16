import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBiographie } from './view-biographie';

describe('ViewBiographie', () => {
  let component: ViewBiographie;
  let fixture: ComponentFixture<ViewBiographie>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBiographie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBiographie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
