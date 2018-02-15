import { NotesInfoForMiscNotesTab } from "./notesInfoForMiscNotesTab";
import { StudentInfoForBioAndAdmissionsPlacementTab } from "./studentInfoForBioAndAdmissionsPlacementTab";

export class IndividualLearningRecordObject {
    miscNote: NotesInfoForMiscNotesTab;
    student: StudentInfoForBioAndAdmissionsPlacementTab;

    constructor(){
        this.student = new StudentInfoForBioAndAdmissionsPlacementTab('','','','','','','','','','','');
        this.miscNote = new NotesInfoForMiscNotesTab('','',0,'');
    }
}
