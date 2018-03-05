export class SemesterReviewResponse {
  constructor(public studentId: number, public midSemesterLearningIssues: boolean[], public endSemesterLearningIssues: boolean[],
                public midSemesterExtentInstructor: string, public endSemesterExtentInstructor: string,
                public midSemesterInstructorRecommendations: string, public endSemesterInstructorRecommendations: string){}
}
