import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentualObesidadePorGeneroComponent } from './percentual-obesidade-por-genero.component';

describe('PercentualObesidadePorGeneroComponent', () => {
  let component: PercentualObesidadePorGeneroComponent;
  let fixture: ComponentFixture<PercentualObesidadePorGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentualObesidadePorGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentualObesidadePorGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
