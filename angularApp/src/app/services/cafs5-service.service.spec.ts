import { TestBed, inject } from '@angular/core/testing';

import { CAFS5InformationService } from './cafs5-service.service';

describe('Cafs5ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CAFS5InformationService]
    });
  });

  it('should be created', inject([CAFS5InformationService], (service: CAFS5InformationService) => {
    expect(service).toBeTruthy();
  }));
});
