import { Student } from "./student";

export class SemesterReview {
  constructor(
    public student: Student,
    public midSemesterLearningIssues: boolean[],
    public endSemesterLearningIssues: boolean[],
    public midSemesterExtentInstructor: string,
    public endSemesterExtentInstructor: string,
    public midSemesterInstructorRecommendations: string,
    public endSemesterInstructorRecommendations: string
  ) {}
}
