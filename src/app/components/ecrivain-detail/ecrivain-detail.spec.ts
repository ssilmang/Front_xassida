import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrivainDetail } from './ecrivain-detail';

describe('EcrivainDetail', () => {
  let component: EcrivainDetail;
  let fixture: ComponentFixture<EcrivainDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcrivainDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrivainDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
