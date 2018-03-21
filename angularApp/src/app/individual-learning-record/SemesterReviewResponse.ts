import { StudentInfoForBioAndAdmissionsPlacementTab } from "./studentInfoForBioAndAdmissionsPlacementTab";
import { Student } from "./student";
import { Classes } from "./classes";

export class SemesterReviewResponse {
  constructor(
     public student: Student,
     public classes: Classes,
     public midSemesterLearningIssues: boolean[],
     public endSemesterLearningIssues: boolean[],
     public midSemesterExtentInstructor: string,
     public endSemesterExtentInstructor: string,
     public midSemesterInstructorRecommendations: string,
     public endSemesterInstructorRecommendations: string
  ) {}
}
