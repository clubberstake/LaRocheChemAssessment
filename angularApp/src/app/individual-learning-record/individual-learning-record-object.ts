import { NotesInfoForMiscNotesTab } from "./notesInfoForMiscNotesTab";
import { StudentInfoForBioAndAdmissionsPlacementTabResponse } from "./studentInfoForBioAndAdmissionsPlacementTabResponse";
import { SemesterReviewResponse } from "./SemesterReviewResponse";
import { LearningIssues } from "./learningIssues";
import { SemesterReviewRequest } from "./SemesterReviewRequest";
import { Student } from "./student";
import { Classes } from "./classes";
import { FileStorage } from "../services/file-storage";
import { SafeUrl } from "@angular/platform-browser";

export class IndividualLearningRecordObject {
    studentId: any;
    studentClass: Student = new Student(0, '', '', '', '', '', '', '', '', '', 0, '', '');
    classes: Classes = new Classes(0, 0, '', '', '', 0);
    miscNote: NotesInfoForMiscNotesTab = new NotesInfoForMiscNotesTab('', '', 0, '');
    student: StudentInfoForBioAndAdmissionsPlacementTabResponse = new StudentInfoForBioAndAdmissionsPlacementTabResponse(null, '', '', '', '', '', '', '', '', '', '', '');
    miscNotes: NotesInfoForMiscNotesTab[] = [];
    semesterReviewResponse: SemesterReviewResponse = new SemesterReviewResponse(this.studentClass, this.classes, null, null, '', '', '', '');
    semesterReviewResponses: SemesterReviewResponse[] = [];
    courseNames: String[] = [];
    courseMap = new Map<any,String>();


    semesterReviewRequest: SemesterReviewRequest = new SemesterReviewRequest(0, 0, null, null, '', '', '', '');
    semesterReviewRequests: SemesterReviewRequest[] = [];

    learningIssues = [new LearningIssues(false, false, "Course Pace"), new LearningIssues(false, false, "Poor Background"), new LearningIssues(false, false, "Lack of Mindset"),
      new LearningIssues(false, false, "Lack of Interest/Curiosity"), new LearningIssues(false, false, "Lack of Effort/Focus"), new LearningIssues(false, false, "Poor Time Management"),
        new LearningIssues(false, false,  "Health Issues"), new LearningIssues(false, false, "Complacence"), new LearningIssues(false, false, "Employment Hours"), new LearningIssues(false, false, "Other")];
}
