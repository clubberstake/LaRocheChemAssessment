import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SemesterReviewResponse } from '../individual-learning-record/SemesterReviewResponse';
import { SemesterReviewRequest } from '../individual-learning-record/SemesterReviewRequest';
import { Observable } from 'rxjs/Observable';
import { CourseSemesterReviewRequest } from '../individual-learning-record/CourseSemesterReviewRequest';

@Injectable()
export class SemesterEvaluationService {

  constructor(private http: HttpClient) { }

  public getSemesterEvaluations(): Observable<SemesterReviewResponse[]> {
    return this.http.get<SemesterReviewResponse[]>("http://localhost:8080/review/semesterReviews");
  }

  public getSemesterEvaluationResponsesByStudentId(studentId: number): Observable<SemesterReviewResponse[]>{
    return this.http.get<SemesterReviewResponse[]>("http://localhost:8080/review/semesterReviews/studentId=" + studentId);
  }

  public getSemesterEvaluationsByStudentId(studentId: number): Observable<SemesterReviewRequest[]> {
    return this.http.get<SemesterReviewRequest[]>("http://localhost:8080/review/semesterReviews/studentId=" + studentId);
  }

  public getSemesterEvaluationsByCourseId(courseId: number, studentId: number): Observable<SemesterReviewResponse[]> {
    return this.http.get<SemesterReviewResponse[]>("http://localhost:8080/review/semesterReviews/courseId=" + courseId + "/studentId=" + studentId);
  }

  public addSemesterReview(review: SemesterReviewResponse) {
    return this.http.post<Response>('http://localhost:8080/review/addReview', review).subscribe(res => console.log(res));
  }

  public addSemesterEvaluation(review: SemesterReviewRequest) {
    return this.http.post<Response>('http://localhost:8080/review/addReview', review).subscribe(res => console.log(res));
  }

  public getSemesterReviewsByClassId(classId: number): Observable<SemesterReviewResponse[]> {
    console.log("Made it to the service");
    return this.http.get<SemesterReviewResponse[]>(
      'http://localhost:8080/review/semesterReviews/classId=' + classId
    );
  }

  public putSemesterEvaluation(review: SemesterReviewRequest) {
    return this.http.put<Request>('http://localhost:8080/review/putReview', review).subscribe(res => console.log(res))
  }

  public addCourseSemesterReview(review: CourseSemesterReviewRequest) {
    return this.http.post<Response>('http://localhost:8080/review/putCourseReview', review).subscribe(res => console.log(res));
  }

}
