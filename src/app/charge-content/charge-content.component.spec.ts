import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeContentComponent } from './charge-content.component';

describe('ChargeContentComponent', () => {
  let component: ChargeContentComponent;
  let fixture: ComponentFixture<ChargeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
