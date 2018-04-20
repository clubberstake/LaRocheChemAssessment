import { TestBed, inject } from '@angular/core/testing';
import { SemesterEvaluationService } from './semester-evaluation.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { SemesterReviewResponse } from '../individual-learning-record/SemesterReviewResponse';
import { SemesterReviewRequest } from '../individual-learning-record/SemesterReviewRequest';
import { CourseSemesterReviewRequest } from '../individual-learning-record/CourseSemesterReviewRequest';

fdescribe('When creating the Semester Evaluation Service', () => {
  let service: SemesterEvaluationService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SemesterEvaluationService]
    });
    service = TestBed.get(SemesterEvaluationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return a course semester evaluation response', inject([SemesterEvaluationService], (service: SemesterEvaluationService) => {
    const dummySemesterReviewResponses: SemesterReviewResponse[] = [
      {
        student: null,
        classes: null,
        midSemesterLearningIssues: null,
        endSemesterLearningIssues: null,
        midSemesterExtentInstructor: "",
        endSemesterExtentInstructor: "",
        midSemesterInstructorRecommendations: "",
        endSemesterInstructorRecommendations: ""
      }
    ];

    const dummySemesterReviewRequests: SemesterReviewRequest[] = [
      {
        studentId: 1,
        classId: 1,
        midSemesterLearningIssues: null,
        endSemesterLearningIssues: null,
        midSemesterExtentInstructor: "",
        endSemesterExtentInstructor: "",
        midSemesterInstructorRecommendations: "",
        endSemesterInstructorRecommendations: ""
      }
    ];

    const dummySemesterReviewRequest: SemesterReviewRequest = {
      studentId: 1,
      classId: 1,
      midSemesterLearningIssues: null,
      endSemesterLearningIssues: null,
      midSemesterExtentInstructor: "Mid Extent Notes",
      endSemesterExtentInstructor: "End Extent Notes",
      midSemesterInstructorRecommendations: "Mid Instructor Recommendations",
      endSemesterInstructorRecommendations: "End Instructor Recommendations"
    }

    const dummyCourseSemesterReviewRequest: CourseSemesterReviewRequest = {
      studentId: 1,
      classId: 1,
      studentName: "Johnny Nicholson",
      midSemesterLearningIssues: null,
      endSemesterLearningIssues: null,
      midSemesterExtentInstructor: "Mid Extent Notes",
      endSemesterExtentInstructor: "End Extent Notes",
      midSemesterInstructorRecommendations: "Mid Instructor Recommendations",
      endSemesterInstructorRecommendations: "End Instructor Recommendations"
    }

    // getSemesterEvaluations Unit Test
    service.getSemesterEvaluations().subscribe(semesterReviewResponses => {
      expect(semesterReviewResponses.length).toBeGreaterThan(0);
      expect(semesterReviewResponses).toEqual(dummySemesterReviewResponses);
    });
    const getSemesterEvaluationsRequest = httpMock.expectOne(service.API_URL + "/review/semesterReviews");
    expect(getSemesterEvaluationsRequest.request.method).toBe("GET");
    getSemesterEvaluationsRequest.flush(dummySemesterReviewResponses);

    // getSemesterEvaluationResponsesByStudentId Unit Test
    service.getSemesterEvaluationResponsesByStudentId(1).subscribe(semesterReviewResponses => {
      expect(semesterReviewResponses.length).toBeGreaterThan(0);
      expect(semesterReviewResponses).toEqual(dummySemesterReviewResponses);
    });
    const getSemesterEvaluationsByStudentIdResponse = httpMock.expectOne(service.API_URL + "/review/semesterReviews/studentId=" + 1);
    expect(getSemesterEvaluationsByStudentIdResponse.request.method).toBe("GET");
    getSemesterEvaluationsByStudentIdResponse.flush(dummySemesterReviewResponses);

    // getSemesterEvaluationRequestsByStudentId Unit Test
    service.getSemesterEvaluationsByStudentId(1).subscribe(semesterReviewRequests => {
      expect(semesterReviewRequests.length).toBeGreaterThan(0);
      expect(semesterReviewRequests).toEqual(dummySemesterReviewRequests);
    });
    const getSemesterEvaluationsByStudentIdRequest = httpMock.expectOne(service.API_URL + "/review/semesterReviews/studentId=" + 1);
    expect(getSemesterEvaluationsByStudentIdRequest.request.method).toBe("GET");
    getSemesterEvaluationsByStudentIdRequest.flush(dummySemesterReviewRequests);

    // getSemesterReviewsByClassId Unit Test
    service.getSemesterReviewsByClassId(1).subscribe(semesterReviewResponses => {
      expect(semesterReviewResponses.length).toBeGreaterThan(0);
      expect(semesterReviewResponses).toEqual(dummySemesterReviewResponses);
    });
    const getSemesterReviewsByClassIdRequest = httpMock.expectOne(service.API_URL + "/review/semesterReviews/classId=" + 1);
    expect(getSemesterReviewsByClassIdRequest.request.method).toBe("GET");
    getSemesterReviewsByClassIdRequest.flush(dummySemesterReviewResponses);

    // getSemesterEvaluationsByCourseId Unit Test
    service.getSemesterEvaluationsByCourseId(1, 1).subscribe(semesterReviewResponses => {
    expect(semesterReviewResponses.length).toBeGreaterThan(0);
    expect(semesterReviewResponses).toEqual(dummySemesterReviewResponses);
    });
    const getSemesterEvaluationsByCourseIdResponse = httpMock.expectOne(service.API_URL + "/review/semesterReviews/courseId=" + 1 + "/studentId=" + 1);
    expect(getSemesterEvaluationsByCourseIdResponse.request.method).toBe("GET");
    getSemesterEvaluationsByCourseIdResponse.flush(dummySemesterReviewResponses);

    // putSemesterEvaluation Unit Test
    service.putSemesterEvaluation(dummySemesterReviewRequest);
    const putSemesterEvaluationRequest = httpMock.expectOne(service.API_URL + "/review/putReview");
    expect(putSemesterEvaluationRequest.request.method).toBe("PUT");

    // addCourseSemesterReview Unit Test
    service.addCourseSemesterReview(dummyCourseSemesterReviewRequest);
    const addCourseSemesterReviewRequest = httpMock.expectOne(service.API_URL + "/review/putCourseReview");
    expect(addCourseSemesterReviewRequest.request.method).toBe("POST");

  }));
});
