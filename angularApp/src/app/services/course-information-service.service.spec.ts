import { TestBed, inject } from '@angular/core/testing';

import { CourseInformationService } from './course-information-service.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CourseInformationObject } from '../course-assessment-worksheet/course-information-object';
import { CourseInfoForAssessment } from '../course-assessment-worksheet/courseInfoForAssessment';

fdescribe('When Creating the CourseInformation Service', () => {
  let service: CourseInformationService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseInformationService]
    });
    service = TestBed.get(CourseInformationService);
    mockHttp = TestBed.get(HttpTestingController);
  });

  afterEach(() =>{
    mockHttp.verify();
   })

  it('the service should return a proper course with courseID, courseName, and courseNumber', inject([CourseInformationService], (service: CourseInformationService) => {
   const dummyCourseRequest: CourseInfoForAssessment[] = [
     {
      courseId: 1,
      courseName: '',
      courseNumber: ''

     },
     {
       courseId: 2,
       courseName: '',
       courseNumber: ''
     }
   ];
   const dummyReviewByCourseId: CourseInfoForAssessment = {
     courseId: 1,
     courseName: 'Organic Chemistry II Lecture',
     courseNumber: 'CHEM2016'
   }


   //getCourseInfo unit test for CourseInformationService
   service.getCourseInfo().subscribe(courseInformationRequest => {
     expect(courseInformationRequest.length).toBeGreaterThan(0);
     expect(courseInformationRequest).toEqual(dummyCourseRequest);
   });
   //what the getRequest URL should be and what type to expect.
   const getDummyCourseRequest = mockHttp.expectOne(service.API_URL + "/courseInfoForAssessmentWorksheet");
   expect(getDummyCourseRequest.request.method).toBe("GET");
   getDummyCourseRequest.flush(dummyCourseRequest);

   //add courses to the database Unit test 
   service.addCourse(dummyReviewByCourseId);
   const putCourseRequest = mockHttp.expectOne(service.API_URL + "/addCourse");
   expect(putCourseRequest.request.method).toBe("POST");
  }));
});
