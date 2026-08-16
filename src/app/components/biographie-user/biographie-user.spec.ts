import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographieUser } from './biographie-user';

describe('BiographieUser', () => {
  let component: BiographieUser;
  let fixture: ComponentFixture<BiographieUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiographieUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiographieUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
