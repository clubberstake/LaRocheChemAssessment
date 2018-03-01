export class MidSemesterReviewResponse {
  constructor(public studentID: number, public learningIssues: boolean[], public extentInstructor: string, public instructorRecommendations: string){}
}
