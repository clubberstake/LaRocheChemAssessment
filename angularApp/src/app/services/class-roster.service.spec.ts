import { TestBed, inject } from '@angular/core/testing';

import { ClassRosterService } from './class-roster.service';

describe('ClassRosterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassRosterService]
    });
  });

  it('should be created', inject([ClassRosterService], (service: ClassRosterService) => {
    expect(service).toBeTruthy();
  }));
});
