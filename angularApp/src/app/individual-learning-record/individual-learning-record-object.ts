import { NotesInfoForMiscNotesTab } from "./notesInfoForMiscNotesTab";
import { StudentInfoForBioAndAdmissionsPlacementTab } from "./studentInfoForBioAndAdmissionsPlacementTab";
import { SemesterReviewResponse } from "./SemesterReviewResponse";
import { LearningIssues } from "./learningIssues";
import { SemesterReviewRequest } from "./SemesterReviewRequest";
import { Student } from "./student";
import { Classes } from "./classes";

export class IndividualLearningRecordObject {
    studentId: any;
    studentClass: Student = new Student(0, '', '', '', '', '', '', '', '', '', '', '');
    classes: Classes = new Classes(0, 0, '', '', '', 0);
    miscNote: NotesInfoForMiscNotesTab = new NotesInfoForMiscNotesTab('', '', 0, '');
    student: StudentInfoForBioAndAdmissionsPlacementTab = new StudentInfoForBioAndAdmissionsPlacementTab('', '', '', '', '', '', '', '', '', '', '');
    miscNotes: NotesInfoForMiscNotesTab[] = [];
    semesterReviewResponse: SemesterReviewResponse = new SemesterReviewResponse(this.studentClass, this.classes, null, null, '', '', '', '');
    semesterReviewResponses: SemesterReviewResponse[] = [];

    semesterReviewRequest: SemesterReviewRequest = new SemesterReviewRequest(0, null, null, '', '', '', '');
    semesterReviewRequests: SemesterReviewRequest[] = [];

    learningIssues = [new LearningIssues(false, false, "Course Pace"), new LearningIssues(false, false, "Poor Background"), new LearningIssues(false, false, "Lack of Mindset"),
      new LearningIssues(false, false, "Lack of Interest/Curiosity"), new LearningIssues(false, false, "Lack of Effort/Focus"), new LearningIssues(false, false, "Poor Time Management"),
        new LearningIssues(false, false,  "Health Issues"), new LearningIssues(false, false, "Complacence"), new LearningIssues(false, false, "Employment Hours"), new LearningIssues(false, false, "Other")];
}
