import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MidSemesterReviewResponse } from '../individual-learning-record/midSemesterReviewResponse';

@Injectable()
export class MidSemesterEvaluationService {

  constructor(private http: HttpClient) { }

  public getMidSemesterEvaluations() {
    return this.http.get<MidSemesterReviewResponse[]>("http://localhost:8080/midSemesterReview/midSemesterReviews");
  }

  public addMidSemesterReview(review: any) {
    return this.http.post<Response>('http://localhost:8080/midSemesterReview/addReview', review).subscribe(res => console.log(res));
  }
}
