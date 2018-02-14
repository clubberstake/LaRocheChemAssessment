import { Component, OnInit } from '@angular/core';
import { NotesInfoForMiscNotesTab } from '../notesInfoForMiscNotesTab';
import { NotesInfoForMiscNotesTabService } from '../../services/notes-info-for-misc-notes-tab.service';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from '../../services/student-info-for-bio-and-admissions-placement-tab.service';
import { StudentInfoForBioAndAdmissionsPlacementTab } from '../studentInfoForBioAndAdmissionsPlacementTab';
import { StudentPaneComponent } from '../student-pane/student-pane.component';

@Component({
  selector: 'app-record-pane',
  templateUrl: './record-pane.component.html',
  styleUrls: ['./record-pane.component.css']
})
export class RecordPaneComponent implements OnInit {
  paneComponent = new StudentPaneComponent();
  studentId: any;
  notesResults: NotesInfoForMiscNotesTab[];
  miscNotes: any;

  studentName: any;
  studentResults: StudentInfoForBioAndAdmissionsPlacementTab[];




  constructor(private miscNoteService: NotesInfoForMiscNotesTabService, private studentService: StudentInfoForBioAndAdmissionsPlacementTabService) { }

  ngOnInit() {
  }

  onClick(studentId: any) { // without type info
    this.miscNoteService.getMiscNoteInfo().subscribe((notes: NotesInfoForMiscNotesTab[]) => {
      this.notesResults = notes;
      this.miscNotes = this.notesResults[0].studentName + ' ' + this.notesResults[0].notes;
    });
    this.studentId = studentId;
    console.log(this.studentId);

    this.studentService.getStudentInfo().subscribe((students: StudentInfoForBioAndAdmissionsPlacementTab[]) => {
      this.studentResults = students;
      this.studentName = this.studentResults[0].studentName;
    });
    console.log(this.studentName);
  }

}
