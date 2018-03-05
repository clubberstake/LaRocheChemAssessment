import { NotesInfoForMiscNotesTab } from "./notesInfoForMiscNotesTab";
import { StudentInfoForBioAndAdmissionsPlacementTab } from "./studentInfoForBioAndAdmissionsPlacementTab";
import { SemesterReviewResponse } from "./SemesterReviewResponse";

export class IndividualLearningRecordObject {
    studentId: any;
    miscNote: NotesInfoForMiscNotesTab = new NotesInfoForMiscNotesTab('', '', 0, '');
    student: StudentInfoForBioAndAdmissionsPlacementTab = new StudentInfoForBioAndAdmissionsPlacementTab('', '', '', '', '', '', '', '', '', '', '');
    miscNotes: NotesInfoForMiscNotesTab[] = [];
    midSemesterReview: SemesterReviewResponse = new SemesterReviewResponse(0, null, null, '', '', '', '');
    midSemesterReviews: SemesterReviewResponse[] = [];
}
