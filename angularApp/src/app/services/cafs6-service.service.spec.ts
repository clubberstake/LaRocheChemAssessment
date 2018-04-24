import { TestBed, inject } from '@angular/core/testing';

import { CAFS6InformationService } from './cafs6-service.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Cafs6Info } from '../course-assessment-worksheet/cafs6';

fdescribe('When creating the cafs6 service ', () => {
let service: CAFS6InformationService; // Initializing my service
let httpMock: HttpTestingController;  // Initializing my mock http
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Importing the testing module
      providers: [CAFS6InformationService] // Importing the Service 
    });
    service = TestBed.get(CAFS6InformationService);  // Instantiating the service and http mock
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifying the http mock here
  })

  it('should return a proper CAFS6 Information ', inject([CAFS6InformationService], (service: CAFS6InformationService) => {
    const dummyCafs6Info: Cafs6Info[]  = 
    [
      {
       id: 1,
       classId: 1,
       depReview: "",
       depReviewer: "",
       newActPlan: "",
       newBudgItem:"",
       divChairReview: "",
       divChairSig: "",
       divChairRevDate: ""

      }
    ];

    const dummycafs6: Cafs6Info = 
    { 
       id: 1,
       classId: 1,
       depReview: "",
       depReviewer: "",
       newActPlan: "",
       newBudgItem:"",
       divChairReview: "",
       divChairSig: "",
       divChairRevDate: ""
    }

    // this is for getCourseInfoForAssessmentWorksheetReview unit test 

    service.getCourseInfoForAssessmentWorksheetReview().subscribe(Cafs6Infos => {
      expect(Cafs6Infos.length).toBeGreaterThan(0);
      expect(Cafs6Infos).toEqual(dummyCafs6Info);
    });

    const getCourseInfoForAssessmentWorksheetReviewRequest = httpMock.expectOne("http://localhost:8080/courseInfoForAssessmentWorksheetReview");
    expect(getCourseInfoForAssessmentWorksheetReviewRequest.request.method).toBe("GET");
    getCourseInfoForAssessmentWorksheetReviewRequest.flush(dummyCafs6Info);

    // this is for updateCafs6 unit test

    service.updateCafs6(dummycafs6) 
    const updateCafs6request = httpMock.expectOne("http://localhost:8080/section6");
    expect(updateCafs6request.request.method).toBe("PUT");
     
  }));
});
