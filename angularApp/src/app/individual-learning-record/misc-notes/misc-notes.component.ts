import { Component, OnInit, Input } from '@angular/core';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from '../../services/student-info-for-bio-and-admissions-placement-tab.service';
import { NotesInfoForMiscNotesTab } from '../notesInfoForMiscNotesTab';
import { NotesInfoForMiscNotesTabService } from '../../services/notes-info-for-misc-notes-tab.service';
import { StudentInfoForBioAndAdmissionsPlacementTab } from '../studentInfoForBioAndAdmissionsPlacementTab';
import { IndividualLearningRecordObject } from '../individual-learning-record-object';

@Component({
  selector: 'app-misc-notes',
  templateUrl: './misc-notes.component.html',
  styleUrls: ['./misc-notes.component.css']
})
export class MiscNotesComponent implements OnInit {

  //studentNote: NotesInfoForMiscNotesTab = new NotesInfoForMiscNotesTab('', '', 0, '');

  //@Input() studentIdInput: any;
  @Input() studentObjectInput: IndividualLearningRecordObject;
  //@Input() notes: NotesInfoForMiscNotesTab[];
  //@Input() dateInput: string;
  time = new Date();

  constructor(private notesService: NotesInfoForMiscNotesTabService) {}

  ngOnInit() {
  }

  postMiscNotes() {
    this.studentObjectInput.miscNote.studentId = this.studentObjectInput.studentId;
    this.studentObjectInput.miscNote.author = "placeholder@somewhere.com";
    this.studentObjectInput.miscNote.time = this.time.getMonth() + "/" + this.time.getDate() + "/" + this.time.getFullYear();
    if (this.studentObjectInput.miscNote.notes != "") {
      this.notesService.addNewNote(this.studentObjectInput.miscNote);
    }
  }
}
