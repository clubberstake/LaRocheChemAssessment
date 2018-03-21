import { TestBed, inject } from '@angular/core/testing';

import { CourseSemesterEvaluationService } from './course-semester-evaluation.service';

describe('CourseSemesterEvaluationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseSemesterEvaluationService]
    });
  });

  it('should be created', inject([CourseSemesterEvaluationService], (service: CourseSemesterEvaluationService) => {
    expect(service).toBeTruthy();
  }));
});
