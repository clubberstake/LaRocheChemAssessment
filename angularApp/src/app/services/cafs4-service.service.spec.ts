import { TestBed, inject } from '@angular/core/testing';

import { CAFS4InformationService } from './cafs4-service.service';

describe('Cafs4ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CAFS4InformationService]
    });
  });

  it('should be created', inject([CAFS4InformationService], (service: CAFS4InformationService) => {
    expect(service).toBeTruthy();
  }));
});
