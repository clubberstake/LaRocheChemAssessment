import { TestBed, inject } from '@angular/core/testing';

import { CAFS1InformationService } from './cafs1-service.service';

describe('Cafs1ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CAFS1InformationService]
    });
  });

  it('should be created', inject([CAFS1InformationService], (service: CAFS1InformationService) => {
    expect(service).toBeTruthy();
  }));
});
