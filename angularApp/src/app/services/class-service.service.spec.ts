import { TestBed, inject } from '@angular/core/testing';

import { ClassInformationService } from './class-service.service';

describe('ClassServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassInformationService]
    });
  });

  it('should be created', inject([ClassInformationService], (service: ClassInformationService) => {
    expect(service).toBeTruthy();
  }));
});
