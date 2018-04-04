import { NotesInfoForMiscNotesTab } from "./notesInfoForMiscNotesTab";
import { StudentInfoForBioAndAdmissionsPlacementTabResponse } from "./studentInfoForBioAndAdmissionsPlacementTabResponse";
import { SemesterReviewResponse } from "./SemesterReviewResponse";
import { LearningIssues } from "./learningIssues";
import { SemesterReviewRequest } from "./SemesterReviewRequest";
import { Student } from "./student";
import { Classes } from "./classes";
import { FileStorage } from "../services/file-storage";

export class IndividualLearningRecordObject {
    studentId: any;
    file: FileStorage = new FileStorage(0, '', '');
    studentClass: Student = new Student(0, '', '', '', '', '', '', '', '', '', '', '');
    classes: Classes = new Classes(0, 0, '', '', '', 0);
    miscNote: NotesInfoForMiscNotesTab = new NotesInfoForMiscNotesTab('', '', 0, '');
    student: StudentInfoForBioAndAdmissionsPlacementTabResponse = new StudentInfoForBioAndAdmissionsPlacementTabResponse(this.file, '', '', '', '', '', '', '', '', '', '');
    miscNotes: NotesInfoForMiscNotesTab[] = [];
    semesterReviewResponse: SemesterReviewResponse = new SemesterReviewResponse(this.studentClass, this.classes, null, null, '', '', '', '');
    semesterReviewResponses: SemesterReviewResponse[] = [];


    semesterReviewRequest: SemesterReviewRequest = new SemesterReviewRequest(0, 0, null, null, '', '', '', '');
    semesterReviewRequests: SemesterReviewRequest[] = [];

    learningIssues = [new LearningIssues(false, false, "Course Pace"), new LearningIssues(false, false, "Poor Background"), new LearningIssues(false, false, "Lack of Mindset"),
      new LearningIssues(false, false, "Lack of Interest/Curiosity"), new LearningIssues(false, false, "Lack of Effort/Focus"), new LearningIssues(false, false, "Poor Time Management"),
        new LearningIssues(false, false,  "Health Issues"), new LearningIssues(false, false, "Complacence"), new LearningIssues(false, false, "Employment Hours"), new LearningIssues(false, false, "Other")];
}
