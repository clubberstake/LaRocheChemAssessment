import { TestBed, inject } from '@angular/core/testing';

import { StudentInfoForBioAndAdmissionsPlacementTabService } from './student-info-for-bio-and-admissions-placement-tab.service';

describe('StudentInfoForBioAndAdmissionsPlacementTabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentInfoForBioAndAdmissionsPlacementTabService]
    });
  });

  it('should be created', inject([StudentInfoForBioAndAdmissionsPlacementTabService], (service: StudentInfoForBioAndAdmissionsPlacementTabService) => {
    expect(service).toBeTruthy();
  }));
});
