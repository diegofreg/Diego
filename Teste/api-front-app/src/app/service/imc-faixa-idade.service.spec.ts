import { TestBed } from '@angular/core/testing';

import { ImcFaixaIdadeService } from './imc-faixa-idade.service';

describe('ImcFaixaIdadeService', () => {
  let service: ImcFaixaIdadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImcFaixaIdadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
