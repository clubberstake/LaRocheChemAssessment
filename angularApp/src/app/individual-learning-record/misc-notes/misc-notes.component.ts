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

  miscNote: NotesInfoForMiscNotesTab = new NotesInfoForMiscNotesTab('','','','');
  miscNotes: NotesInfoForMiscNotesTab[] = [];

  @Input() studentIdInput: any;
  @Input() studentsInput: StudentInfoForBioAndAdmissionsPlacementTab;
  
  constructor(private notesService: NotesInfoForMiscNotesTabService, private studentService: StudentInfoForBioAndAdmissionsPlacementTabService) { 
  }

  ngOnInit() {
  }

  getMiscNotes(){
    this.notesService.getMiscNoteInfo().subscribe((miscNotes: NotesInfoForMiscNotesTab[])=>{
      this.miscNotes = this.miscNotes;
      this.miscNote = this.miscNotes[0];
      console.log(this.miscNote);
    });
  }







}
