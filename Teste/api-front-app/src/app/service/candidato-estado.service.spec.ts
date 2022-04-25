import { TestBed } from '@angular/core/testing';

import { CandidatoEstadoService } from './candidato-estado.service';

describe('CandidatoEstadoService', () => {
  let service: CandidatoEstadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatoEstadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
