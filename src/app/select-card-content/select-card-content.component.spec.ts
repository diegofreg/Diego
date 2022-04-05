import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCardContentComponent } from './select-card-content.component';

describe('SelectCardContentComponent', () => {
  let component: SelectCardContentComponent;
  let fixture: ComponentFixture<SelectCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCardContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
