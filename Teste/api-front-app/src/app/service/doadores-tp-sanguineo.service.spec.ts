import { TestBed } from '@angular/core/testing';

import { DoadoresTpSanguineoService } from './doadores-tp-sanguineo.service';

describe('DoadoresTpSanguineoService', () => {
  let service: DoadoresTpSanguineoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoadoresTpSanguineoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
