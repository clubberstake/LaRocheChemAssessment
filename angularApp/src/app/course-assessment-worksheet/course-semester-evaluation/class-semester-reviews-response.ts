import { SemesterReview } from "./semester-review";
import { Classes } from "./classes";

export class ClassSemesterReviewsResponse {
  constructor(public semesterReview: SemesterReview, public classes: Classes) {}
}
