import { StudentInfoForBioAndAdmissionsPlacementTabResponse } from "./studentInfoForBioAndAdmissionsPlacementTabResponse";
import { Student } from "./student";
import { Classes } from "./classes";

export class SemesterReviewResponse {
  constructor(
    public students: Student,
    public classes: Classes, 
    public mliCoursePace:boolean,
    public mliLackOfMindset:boolean,
    public mliLackOfCuriosity:boolean,
    public mliLackOfEffortFocus:boolean,
    public mliPoorTimeManagement:boolean,
    public mliHealthIssues:boolean,
    public mliComplacence:boolean,
    public mliEmployementHours:boolean,
    public mliOther:boolean,
    public mliOtherIssues:String,
    public esliCoursePace:boolean,
    public esliLackOfMindset:boolean,
    public esliLackOfCuriosity:boolean,
    public esliLackOfEffortFocus:boolean,
    public esliPoorTimeManagement:boolean,
    public esliHealthIssues:boolean,
    public esliComplacence:boolean,
    public esliEmployementHours:boolean,
    public esliOther:boolean,
    public esliOtherIssues:String,
    public midSemesterExtentInstructor: string,
    public endSemesterExtentInstructor: string,
    public midSemesterInstructorRecommendations: string,
    public endSemesterInstructorRecommendations: string) {}
}
