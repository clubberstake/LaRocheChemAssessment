import { TestBed, inject } from '@angular/core/testing';

import { CAFS5InformationService } from './cafs5-service.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Cafs5Info } from '../course-assessment-worksheet/cafs5'; 


fdescribe('Cafs5ServiceService', () => {
  let service: CAFS5InformationService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CAFS5InformationService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(CAFS5InformationService);
    httpMock = TestBed.get(HttpTestingController);
  });
  
  afterEach(() => {
    httpMock.verify();
  })

  it('should return the proper information for CAFS5', inject([CAFS5InformationService], (service: CAFS5InformationService) => {
    
    const dummyCafs5: Cafs5Info[] = 
  [
    {
      classID: 1,
      sec4Num: 1,
      iDNum: 1,
      grade: "",
      learningIssues: "",
      extentInstructor: "",
      instructorRecommendations: ""
    }
  ];
    
    // Starting the unit test for get<Cafs5Info
  service.getCAFS5Info().subscribe(Cafs5Info => {
  expect(Cafs5Info.length).toBeGreaterThan(0)
  expect(Cafs5Info).toEqual(dummyCafs5)
    });
    
    const getCAFS5InfoRequest = httpMock.expectOne("http://localhost:8080/cafs5");
    expect(getCAFS5InfoRequest.request.method).toBe("GET"); 
    getCAFS5InfoRequest.flush(dummyCafs5);
  }));
});
