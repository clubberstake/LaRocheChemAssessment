import { TestBed, inject } from '@angular/core/testing';

import { InstructorInformationService } from './instructor-service.service';

describe('InstructorInformationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstructorInformationService]
    });
  });

  it('should be created', inject([InstructorInformationService], (service: InstructorInformationService) => {
    expect(service).toBeTruthy();
  }));
});
