import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLabelsComponent } from './generate-labels.component';

describe('GenerateLabelsComponent', () => {
  let component: GenerateLabelsComponent;
  let fixture: ComponentFixture<GenerateLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateLabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
