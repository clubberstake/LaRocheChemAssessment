import { Component, OnInit } from '@angular/core';
import { NotesInfoForMiscNotesTab } from './notesInfoForMiscNotesTab';
import { NotesInfoForMiscNotesTabService } from '../services/notes-info-for-misc-notes-tab.service';
import { StudentInfoForBioAndAdmissionsPlacementTab } from './studentInfoForBioAndAdmissionsPlacementTab';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from '../services/student-info-for-bio-and-admissions-placement-tab.service';

@Component({
  selector: 'app-individual-learning-record',
  templateUrl: './individual-learning-record.component.html',
  styleUrls: ['./individual-learning-record.component.css']
})
export class IndividualLearningRecordComponent implements OnInit {

  miscNote: NotesInfoForMiscNotesTab;
  miscNotes: NotesInfoForMiscNotesTab[] = [];

  student: StudentInfoForBioAndAdmissionsPlacementTab;
  students: StudentInfoForBioAndAdmissionsPlacementTab[] = [];

  constructor(private notesService: NotesInfoForMiscNotesTabService, private studentsService: StudentInfoForBioAndAdmissionsPlacementTabService) { }

  ngOnInit() {
    this.notesService.getMiscNoteInfo().subscribe((miscNotes: NotesInfoForMiscNotesTab[]) => {
      this.miscNotes = miscNotes;
      console.log(this.miscNotes);
      this.miscNote = this.miscNotes[0];
    });

    this.studentsService.getStudentInfo().subscribe((students: StudentInfoForBioAndAdmissionsPlacementTab[]) => {
      this.students = students;
      console.log(this.students);
      this.student = students[0];
    });

  }

}
