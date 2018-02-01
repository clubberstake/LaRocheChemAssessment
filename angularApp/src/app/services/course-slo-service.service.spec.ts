import { TestBed, inject } from '@angular/core/testing';

import { CourseSLOsInformationService } from './course-slo-service.service';

describe('CourseSLOServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseSLOsInformationService]
    });
  });

  it('should be created', inject([CourseSLOsInformationService], (service: CourseSLOsInformationService) => {
    expect(service).toBeTruthy();
  }));
});
