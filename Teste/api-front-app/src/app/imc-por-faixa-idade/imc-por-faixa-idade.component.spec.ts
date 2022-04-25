import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcPorFaixaIdadeComponent } from './imc-por-faixa-idade.component';

describe('ImcPorFaixaIdadeComponent', () => {
  let component: ImcPorFaixaIdadeComponent;
  let fixture: ComponentFixture<ImcPorFaixaIdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImcPorFaixaIdadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcPorFaixaIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
