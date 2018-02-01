import { TestBed, inject } from '@angular/core/testing';

import { CurrentClassInformationService } from './current-class-service';

describe('CurrentClassServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentClassInformationService]
    });
  });

  it('should be created', inject([CurrentClassInformationService], (service: CurrentClassInformationService) => {
    expect(service).toBeTruthy();
  }));
});
