import { TestBed, inject } from '@angular/core/testing';

import { CAFS3InformationService } from './cafs3-service.service';

describe('Cafs1ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CAFS3InformationService]
    });
  });

  it('should be created', inject([CAFS3InformationService], (service: CAFS3InformationService) => {
    expect(service).toBeTruthy();
  }));
});