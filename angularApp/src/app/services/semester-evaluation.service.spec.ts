import { TestBed, inject } from '@angular/core/testing';

import { SemesterEvaluationService } from './semester-evaluation.service';

describe('SemesterEvaluationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SemesterEvaluationService]
    });
  });

  it('should be created', inject([SemesterEvaluationService], (service: SemesterEvaluationService) => {
    expect(service).toBeTruthy();
  }));
});
