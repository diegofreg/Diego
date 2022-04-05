import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainExchangesComponent } from './main-exchanges.component';

describe('MainExchangesComponent', () => {
  let component: MainExchangesComponent;
  let fixture: ComponentFixture<MainExchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainExchangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
