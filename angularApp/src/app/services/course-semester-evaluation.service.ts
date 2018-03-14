import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ClassSemesterReviewsResponse } from "../course-assessment-worksheet/course-semester-evaluation/class-semester-reviews-response";

@Injectable()
export class CourseSemesterEvaluationService {
  readonly API_URL = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  public getSemesterReviewsByCourse(
    courseId
  ): Observable<ClassSemesterReviewsResponse[]> {
    console.log("Made it to the service");
    return this.http.get<ClassSemesterReviewsResponse[]>(
      "${this.API_URL}/classSemesterReviews/"
    );
  }
}
