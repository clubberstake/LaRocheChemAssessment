import { TestBed, inject } from '@angular/core/testing';

import { CAF3DisplayService } from './caf3-display-service.service';

describe('CAF3DisplayServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CAF3DisplayService]
    });
  });

  it('should be created', inject([CAF3DisplayService], (service: CAF3DisplayService) => {
    expect(service).toBeTruthy();
  }));
});