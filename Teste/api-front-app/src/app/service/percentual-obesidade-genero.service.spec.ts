import { TestBed } from '@angular/core/testing';

import { PercentualObesidadeGeneroService } from './percentual-obesidade-genero.service';

describe('PercentualObesidadeGeneroService', () => {
  let service: PercentualObesidadeGeneroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PercentualObesidadeGeneroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
