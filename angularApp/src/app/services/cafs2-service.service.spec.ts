import { TestBed, inject } from '@angular/core/testing';

import { CAFS2InformationService } from './cafs2-service.service';

describe('Cafs2ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CAFS2InformationService]
    });
  });

  it('should be created', inject([CAFS2InformationService], (service: CAFS2InformationService) => {
    expect(service).toBeTruthy();
  }));
});
