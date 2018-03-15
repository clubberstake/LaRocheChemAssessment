import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { SemesterReviewResponse } from "../individual-learning-record/SemesterReviewResponse";

@Injectable()
export class CourseSemesterEvaluationService {
  readonly API_URL = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  public getSemesterReviewsByCourse(courseId: number): Observable<SemesterReviewResponse[]> {
    console.log("Made it to the service");
    return this.http.get<SemesterReviewResponse[]>(
      "${this.API_URL}/review/classSemesterReviews/classId=" + courseId
    );
  }

  public getSemesterReviewsByStudent(studentId: number): Observable<SemesterReviewResponse> {
    return this.http.get<SemesterReviewResponse> (
      "${this.API_URL}/review/classSemesterReviews/studentId=" + studentId
    );
  }

  public addMidSemesterReview(review: SemesterReviewResponse) {
    return this.http.post<Response>("${this.API_URL}/review/addReview", review).subscribe(res => console.log(res));
  }

}
