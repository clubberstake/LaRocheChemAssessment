import { Component, OnInit, Input } from '@angular/core';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from '../../services/student-info-for-bio-and-admissions-placement-tab.service';
import { NotesInfoForMiscNotesTab } from '../notesInfoForMiscNotesTab';
import { NotesInfoForMiscNotesTabService } from '../../services/notes-info-for-misc-notes-tab.service';
import { StudentInfoForBioAndAdmissionsPlacementTabResponse } from '../studentInfoForBioAndAdmissionsPlacementTabResponse';
import { IndividualLearningRecordObject } from '../individual-learning-record-object';
import { userObject } from '../../userObject';
import swal from 'sweetalert2';

@Component({
  selector: 'app-misc-notes',
  templateUrl: './misc-notes.component.html',
  styleUrls: ['./misc-notes.component.css']
})
export class MiscNotesComponent implements OnInit {

  @Input() studentObjectInput: IndividualLearningRecordObject;
  @Input() userObject: userObject;
  time = new Date();
  month: number;

  constructor(private notesService: NotesInfoForMiscNotesTabService) {}

  ngOnInit() {
  }

  postMiscNotes() {
    this.month = this.time.getUTCMonth() + 1;
    this.studentObjectInput.miscNote.studentId = this.studentObjectInput.studentId;
    this.studentObjectInput.miscNote.author = this.userObject.user.username;
    this.studentObjectInput.miscNote.time = this.month + "/" + this.time.getUTCDate() + "/" + this.time.getUTCFullYear();
    if (this.studentObjectInput.miscNote.notes != "") {
      this.notesService.addNewNote(this.studentObjectInput.miscNote);
    }

    swal({
      type: 'success',
      title: 'Miscellaneous Notes Saved!',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
