import { TestBed } from '@angular/core/testing';

import { MediaEtariaTipoSanguineoService } from './media-etaria-tipo-sanguineo.service';

describe('MediaEtariaTipoSanguineoService', () => {
  let service: MediaEtariaTipoSanguineoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaEtariaTipoSanguineoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
