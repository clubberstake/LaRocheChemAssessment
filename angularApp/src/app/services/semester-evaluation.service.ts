import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SemesterReviewResponse } from '../individual-learning-record/SemesterReviewResponse';
import { SemesterReviewRequest } from '../individual-learning-record/SemesterReviewRequest';
import { Observable } from 'rxjs/Observable';
import { CourseSemesterReviewRequest } from '../individual-learning-record/CourseSemesterReviewRequest';

@Injectable()
export class SemesterEvaluationService {

  constructor(private http: HttpClient) { }

  readonly API_URL = "http://localhost:8080";

  public getSemesterEvaluations(): Observable<SemesterReviewResponse[]> {
    return this.http.get<SemesterReviewResponse[]>(this.API_URL + "/review/semesterReviews");
  }

  public getSemesterEvaluationResponsesByStudentId(studentId: number): Observable<SemesterReviewResponse[]>{
    return this.http.get<SemesterReviewResponse[]>(this.API_URL + "/review/semesterReviews/studentId=" + studentId);
  }

  public getSemesterEvaluationsByStudentId(studentId: number): Observable<SemesterReviewRequest[]> {
    return this.http.get<SemesterReviewRequest[]>(this.API_URL + "/review/semesterReviews/studentId=" + studentId);
  }

  public getSemesterEvaluationsByCourseId(courseId: number, studentId: number): Observable<SemesterReviewResponse[]> {
    return this.http.get<SemesterReviewResponse[]>(this.API_URL + "/review/semesterReviews/courseId=" + courseId + "/studentId=" + studentId);
  }

  public getSemesterReviewsByClassId(classId: number): Observable<SemesterReviewResponse[]> {
    console.log("Made it to the service");
    return this.http.get<SemesterReviewResponse[]>(
      this.API_URL + "/review/semesterReviews/classId=" + classId
    );
  }

  public putSemesterEvaluation(review: SemesterReviewRequest) {
    return this.http.put<Request>(this.API_URL + "/review/putReview", review).subscribe(res => console.log(res))
  }

  public addCourseSemesterReview(review: CourseSemesterReviewRequest) {
    return this.http.post<Response>(this.API_URL + "/review/putCourseReview", review).subscribe(res => console.log(res));
  }
}
