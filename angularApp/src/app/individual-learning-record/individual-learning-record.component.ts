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

  studentId: any;
  student: StudentInfoForBioAndAdmissionsPlacementTab = new StudentInfoForBioAndAdmissionsPlacementTab('', '', '', '', '', '', '', '', '', '', '');
  students: StudentInfoForBioAndAdmissionsPlacementTab[];

  miscNote: NotesInfoForMiscNotesTab;
  miscNotes: NotesInfoForMiscNotesTab[] = [];

  constructor(private notesService: NotesInfoForMiscNotesTabService, private studentsService: StudentInfoForBioAndAdmissionsPlacementTabService) {
  }

  ngOnInit() {
    this.notesService.getMiscNoteInfo().subscribe((miscNotes: NotesInfoForMiscNotesTab[]) => {
      this.miscNotes = miscNotes;
      console.log(this.miscNotes);
      this.miscNote = this.miscNotes[0];
    });
  }

  onSearch(studentId: any) {
    // this.studentsService.getStudentInfo().subscribe((students: StudentInfoForBioAndAdmissionsPlacementTab[]) => {
    //   this.student = students[0]
    // });

    this.studentsService.getStudentInfoById(studentId).subscribe((student: StudentInfoForBioAndAdmissionsPlacementTab) => {
      this.student = student;
    });

    this.studentId = studentId;
    console.log(this.studentId);
  }

}
