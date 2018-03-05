import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SemesterReviewResponse } from '../individual-learning-record/SemesterReviewResponse';

@Injectable()
export class SemesterEvaluationService {

  constructor(private http: HttpClient) { }

  public getMidSemesterEvaluations() {
    return this.http.get<SemesterReviewResponse[]>("http://localhost:8080/midSemesterReview/midSemesterReviews");
  }

  public addMidSemesterReview(review: any) {
    return this.http.post<Response>('http://localhost:8080/midSemesterReview/addReview', review).subscribe(res => console.log(res));
  }

}
