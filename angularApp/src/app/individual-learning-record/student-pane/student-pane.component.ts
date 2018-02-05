import { Component, OnInit, Input } from '@angular/core';
import { StudentInfoForBioAndAdmissionsPlacementTab } from '../studentInfoForBioAndAdmissionsPlacementTab';

@Component({
  selector: 'app-student-pane',
  templateUrl: './student-pane.component.html',
  styleUrls: ['./student-pane.component.css']
})
export class StudentPaneComponent implements OnInit {

  @Input() studentIdInput: any;
  @Input() studentsInput: StudentInfoForBioAndAdmissionsPlacementTab;

  constructor() {

  }

  ngOnInit() {
  }

  onUpdateStudent() {
    console.log('This will update current student.');
  }

}
