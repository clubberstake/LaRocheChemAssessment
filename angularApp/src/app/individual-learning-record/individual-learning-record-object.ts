import { NotesInfoForMiscNotesTab } from "./notesInfoForMiscNotesTab";
import { StudentInfoForBioAndAdmissionsPlacementTab } from "./studentInfoForBioAndAdmissionsPlacementTab";
import { MidSemesterReviewResponse } from "./midSemesterReviewResponse";

export class IndividualLearningRecordObject {
    studentId: any;
    miscNote: NotesInfoForMiscNotesTab = new NotesInfoForMiscNotesTab('', '', 0, '');
    student: StudentInfoForBioAndAdmissionsPlacementTab = new StudentInfoForBioAndAdmissionsPlacementTab('', '', '', '', '', '', '', '', '', '', '');
    miscNotes: NotesInfoForMiscNotesTab[] = [];
    midSemesterReview: MidSemesterReviewResponse = new MidSemesterReviewResponse(0, [false, false, false, false, false, false, false, false, false, false], "", "");
    midSemesterReviews: MidSemesterReviewResponse[] = [];
}
