import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeBlockComponent } from './range-block.component';

describe('RangeBlockComponent', () => {
  let component: RangeBlockComponent;
  let fixture: ComponentFixture<RangeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
