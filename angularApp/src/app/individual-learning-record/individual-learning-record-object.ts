import { NotesInfoForMiscNotesTab } from "./notesInfoForMiscNotesTab";
import { StudentInfoForBioAndAdmissionsPlacementTab } from "./studentInfoForBioAndAdmissionsPlacementTab";
import { SemesterReviewResponse } from "./SemesterReviewResponse";
import { LearningIssues } from "./learningIssues";

export class IndividualLearningRecordObject {
    studentId: any;
    miscNote: NotesInfoForMiscNotesTab = new NotesInfoForMiscNotesTab('', '', 0, '');
    student: StudentInfoForBioAndAdmissionsPlacementTab = new StudentInfoForBioAndAdmissionsPlacementTab('', '', '', '', '', '', '', '', '', '', '');
    miscNotes: NotesInfoForMiscNotesTab[] = [];
    midSemesterReview: SemesterReviewResponse = new SemesterReviewResponse(0, null, null, '', '', '', '');
    midSemesterReviews: SemesterReviewResponse[] = [];
    learningIssues = [new LearningIssues(false, false, "Course Pace"), new LearningIssues(false, false, "Poor Background"), new LearningIssues(false, false, "Lack of Mindset"),
      new LearningIssues(false, false, "Lack of Interest/Curiosity"), new LearningIssues(false, false, "Lack of Effort/Focus"), new LearningIssues(false, false, "Poor Time Management"),
        new LearningIssues(false, false,  "Health Issues"), new LearningIssues(false, false, "Complacence"), new LearningIssues(false, false, "Employment Hours"), new LearningIssues(false, false, "Other")];
}
