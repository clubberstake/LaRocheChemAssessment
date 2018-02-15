import { Component, OnInit } from '@angular/core';
import { NotesInfoForMiscNotesTab } from './notesInfoForMiscNotesTab';
import { NotesInfoForMiscNotesTabService } from '../services/notes-info-for-misc-notes-tab.service';
import { StudentInfoForBioAndAdmissionsPlacementTab } from './studentInfoForBioAndAdmissionsPlacementTab';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from '../services/student-info-for-bio-and-admissions-placement-tab.service';
import { Response } from '@angular/http/src/static_response';
import { IndividualLearningRecordObject } from './individual-learning-record-object';

@Component({
  selector: 'app-individual-learning-record',
  templateUrl: './individual-learning-record.component.html',
  styleUrls: ['./individual-learning-record.component.css']
})
export class IndividualLearningRecordComponent implements OnInit {

  studentId: any;
  student: StudentInfoForBioAndAdmissionsPlacementTab = new StudentInfoForBioAndAdmissionsPlacementTab('', '', '', '', '', '', '', '', '', '', '');
  students: StudentInfoForBioAndAdmissionsPlacementTab[];
  miscNotes: NotesInfoForMiscNotesTab[] = [];
  date: string;
  // ILR Object at the root level which will now hold a reference to student and student's miscNotes.
  ilrStudentOject: IndividualLearningRecordObject;

  time = new Date();

  constructor(private studentsService: StudentInfoForBioAndAdmissionsPlacementTabService, private notesService: NotesInfoForMiscNotesTabService) {
    this.ilrStudentOject = new IndividualLearningRecordObject();
  }

  ngOnInit() {
    this.date = this.time.getMonth().toString() + "/" + this.time.getDate().toString() + "/" + this.time.getFullYear();
    console.log(this.date);
  }

  onSearchById(studentId: any) {
    this.studentsService.getStudentInfoById(studentId).subscribe((student: StudentInfoForBioAndAdmissionsPlacementTab) => {
      this.student = student;
      this.ilrStudentOject.student = student;
      console.log(this.ilrStudentOject);
    });

    this.notesService.getMiscNoteInfoByStudentId(studentId).subscribe((miscNotes: NotesInfoForMiscNotesTab[]) => {
      this.miscNotes = miscNotes;
     // this.ilrStudentOject.miscNote = miscNotes[0];
      console.log(this.miscNotes);
      console.log(this.ilrStudentOject);
    })

    this.studentId = studentId;
    console.log(this.studentId);
  }

  onSearchByName(studentName: any) {
    console.log(studentName);
  }
}
