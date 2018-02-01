import { Component, OnInit } from '@angular/core';
import { NotesInfoForMiscNotesTab } from '../notesInfoForMiscNotesTab';
import { NotesInfoForMiscNotesTabService } from '../../services/notes-info-for-misc-notes-tab.service';

@Component({
  selector: 'app-record-pane',
  templateUrl: './record-pane.component.html',
  styleUrls: ['./record-pane.component.css']
})
export class RecordPaneComponent implements OnInit {

  studentId: any;
  results: NotesInfoForMiscNotesTab[];
  miscNotes: any;

  constructor(private miscNoteService: NotesInfoForMiscNotesTabService) { }

  ngOnInit() {
  }

  onClick(studentId: any) { // without type info
    this.miscNoteService.getMiscNoteInfo().subscribe((notes: NotesInfoForMiscNotesTab[]) => {
      this.results = notes;
      this.miscNotes = this.results[0].studentName + ' ' + this.results[0].notes;
    });
    this.studentId = studentId;
    console.log(this.studentId);
  }

}
