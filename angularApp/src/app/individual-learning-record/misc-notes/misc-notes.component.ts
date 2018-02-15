import { Component, OnInit, Input } from '@angular/core';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from '../../services/student-info-for-bio-and-admissions-placement-tab.service';
import { NotesInfoForMiscNotesTab } from '../notesInfoForMiscNotesTab';
import { NotesInfoForMiscNotesTabService } from '../../services/notes-info-for-misc-notes-tab.service';
import { StudentInfoForBioAndAdmissionsPlacementTab } from '../studentInfoForBioAndAdmissionsPlacementTab';

@Component({
  selector: 'app-misc-notes',
  templateUrl: './misc-notes.component.html',
  styleUrls: ['./misc-notes.component.css']
})
export class MiscNotesComponent implements OnInit {

  studentNote: NotesInfoForMiscNotesTab = new NotesInfoForMiscNotesTab('', '', 0, '');

  @Input() studentIdInput: any;
  @Input() studentsInput: StudentInfoForBioAndAdmissionsPlacementTab;
  @Input() notes: NotesInfoForMiscNotesTab[];
  @Input() dateInput: string;

  constructor(private notesService: NotesInfoForMiscNotesTabService) {}

  ngOnInit() {
  }

  postMiscNotes() {
    this.studentNote.studentId = this.studentIdInput;
    this.studentNote.author = "placeholder@somewhere.com";
    this.studentNote.time = this.dateInput;
    if (this.studentNote.notes != "") {
      this.notesService.addNewNote(this.studentNote);
    }
  }
}
