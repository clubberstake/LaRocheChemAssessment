import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SemesterReviewResponse } from '../individual-learning-record/SemesterReviewResponse';
import { SemesterReviewRequest } from '../individual-learning-record/SemesterReviewRequest';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SemesterEvaluationService {

  constructor(private http: HttpClient) { }

  public getSemesterEvaluations(): Observable<SemesterReviewResponse[]> {
    return this.http.get<SemesterReviewResponse[]>("http://localhost:8080/review/semesterReviews");
  }

  public getSemesterEvaluationsByStudentId(studentId: number): Observable<SemesterReviewRequest[]> {
    return this.http.get<SemesterReviewRequest[]>("http://localhost:8080/review/semesterReviews/studentId=" + studentId);
  }


  public addSemesterEvaluation(review: SemesterReviewRequest) {
    return this.http.post<Response>('http://localhost:8080/review/addReview', review).subscribe(res => console.log(res));
  }

  public getSemesterReviewsByCourse(classId: number): Observable<SemesterReviewResponse[]> {
    console.log("Made it to the service");
    return this.http.get<SemesterReviewResponse[]>(
      'http://localhost:8080/review/semesterReviews/classId=' + classId
    );
  }

  public putSemesterEvaluation(review: SemesterReviewRequest) {
    return this.http.put<Request>('http://localhost:8080/review/putReview', review).subscribe(res => console.log(res))
  }

}
