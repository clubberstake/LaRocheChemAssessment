import { TestBed, inject } from '@angular/core/testing';
import { SemesterEvaluationService } from './semester-evaluation.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { SemesterReviewResponse } from '../individual-learning-record/SemesterReviewResponse';
import { SemesterReviewRequest } from '../individual-learning-record/SemesterReviewRequest';
import { CourseSemesterReviewRequest } from '../individual-learning-record/CourseSemesterReviewRequest';

describe('When creating the Semester Evaluation Services', () => {
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

  it('should return a proper course semester evaluation response or request pertaining to each service within the Semester Evaluation Service file', inject([SemesterEvaluationService], (service: SemesterEvaluationService) => {
    const dummySemesterReviewResponses: SemesterReviewResponse[] = [
      {
        student: null,
        classes: null,
        mliCoursePace: false,
        mliLackOfMindset: false,
        mliLackOfInterestCuriousity: false,
        mliLackOfEffortFocus: false,
        mliPoorTimeManagement: false,
        mliHealthIssues: false,
        mliComplacence: false,
        mliEmployementHours: false,
        mliOther: false,
        mliOtherIssues: "",
        esliCoursePace: false,
        esliLackOfMindset: false,
        esliLackOfInterestCuriousity: false,
        esliLackOfEffortFocus: false,
        esliPoorTimeManagement: false,
        esliHealthIssues: false,
        esliComplacence: false,
        esliEmployementHours: false,
        esliOther: false,
        esliOtherIssues: "",
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
        mliCoursePace: false,
        mliLackOfMindset: false,
        mliLackOfCuriosity: false,
        mliLackOfEffortFocus: false,
        mliPoorTimeManagement: false,
        mliHealthIssues: false,
        mliComplacence: false,
        mliEmployementHours: false,
        mliOther: false,
        mliOtherIssues: "",
        esliCoursePace: false,
        esliLackOfMindset: false,
        esliLackOfCuriosity: false,
        esliLackOfEffortFocus: false,
        esliPoorTimeManagement: false,
        esliHealthIssues: false,
        esliComplacence: false,
        esliEmployementHours: false,
        esliOther: false,
        esliOtherIssues: "",
        midSemesterExtentInstructor: "",
        endSemesterExtentInstructor: "",
        midSemesterInstructorRecommendations: "",
        endSemesterInstructorRecommendations: ""
      }
    ];

    const dummySemesterReviewRequest: SemesterReviewRequest = {
      studentId: 1,
      classId: 1,
      mliCoursePace: false,
      mliLackOfMindset: false,
      mliLackOfCuriosity: false,
      mliLackOfEffortFocus: false,
      mliPoorTimeManagement: false,
      mliHealthIssues: false,
      mliComplacence: false,
      mliEmployementHours: false,
      mliOther: false,
      mliOtherIssues: "",
      esliCoursePace: false,
      esliLackOfMindset: false,
      esliLackOfCuriosity: false,
      esliLackOfEffortFocus: false,
      esliPoorTimeManagement: false,
      esliHealthIssues: false,
      esliComplacence: false,
      esliEmployementHours: false,
      esliOther: false,
      esliOtherIssues: "",
      midSemesterExtentInstructor: "Mid Extent Notes",
      endSemesterExtentInstructor: "End Extent Notes",
      midSemesterInstructorRecommendations: "Mid Instructor Recommendations",
      endSemesterInstructorRecommendations: "End Instructor Recommendations"
    }

    const dummyCourseSemesterReviewRequest: CourseSemesterReviewRequest = {
      mliCoursePace: false,
      mliLackOfMindset: false,
      mliLackOfInterestCuriousity: false,
      mliLackOfEffortFocus: false,
      mliPoorTimeManagement: false,
      mliHealthIssues: false,
      mliComplacence: false,
      mliEmploymentHours: false,
      mliOther: false,
      mliOtherIssues: "",
      esliCoursePace: false,
      esliPoorTimeManagement: false,
      esliHealthIssues: false,
      esliComplacence: false,
      esliEmploymentHours: false,
      esliOther: false,
      esliotherIssues: "",
      midSemesterExtentInstructor: "Mid Extent Notes",
      endSemesterExtentInstructor: "End Extent Notes",
      midSemesterInstructorRecommendations: "Mid Instructor Recommendations",
      endSemesterInstructorRecommendations: "End Instructor Recommendations",
      studentName: "Johnny Nicholson",
      studentId: 1,
      classId: 1
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
