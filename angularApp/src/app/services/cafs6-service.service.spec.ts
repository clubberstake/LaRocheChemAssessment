import { TestBed, inject } from '@angular/core/testing';

import { CAFS6InformationService } from './cafs6-service.service';

describe('Cafs6ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CAFS6InformationService]
    });
  });

  it('should be created', inject([CAFS6InformationService], (service: CAFS6InformationService) => {
    expect(service).toBeTruthy();
  }));
});
