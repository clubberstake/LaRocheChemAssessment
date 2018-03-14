import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SemesterReviewResponse } from '../individual-learning-record/SemesterReviewResponse';
import { SemesterReviewRequest } from '../individual-learning-record/SemesterReviewRequest';

@Injectable()
export class SemesterEvaluationService {

  constructor(private http: HttpClient) { }

  public getMidSemesterEvaluations() {
    return this.http.get<SemesterReviewResponse[]>("http://localhost:8080/review/semesterReviews");
  }

  public getMidSemesterEvaluationsById(id: number) {
    return this.http.get<SemesterReviewRequest>("http://localhost:8080/review/semesterReviews/studentId=" + id);
  }

  public addMidSemesterReview(review: SemesterReviewRequest) {
    return this.http.post<Response>('http://localhost:8080/review/addReview', review).subscribe(res => console.log(res));
  }

}
