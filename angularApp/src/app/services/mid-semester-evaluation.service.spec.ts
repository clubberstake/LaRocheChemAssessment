import { TestBed, inject } from '@angular/core/testing';

import { MidSemesterEvaluationService } from './mid-semester-evaluation.service';

describe('MidSemesterEvaluationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MidSemesterEvaluationService]
    });
  });

  it('should be created', inject([MidSemesterEvaluationService], (service: MidSemesterEvaluationService) => {
    expect(service).toBeTruthy();
  }));
});
