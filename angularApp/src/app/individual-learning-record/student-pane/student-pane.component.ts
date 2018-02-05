import { Component, OnInit, Input } from '@angular/core';
import { StudentInfoForBioAndAdmissionsPlacementTab } from '../studentInfoForBioAndAdmissionsPlacementTab';

@Component({
  selector: 'app-student-pane',
  templateUrl: './student-pane.component.html',
  styleUrls: ['./student-pane.component.css']
})
export class StudentPaneComponent implements OnInit {

  @Input() studentIdInput: any;
  @Input() studentNameInput: any;
  @Input() studentMajorInput: any;
  @Input() studentSemesterInput: any;
  @Input() studentYearInput: any;
  @Input() studentAthleticsInput: any;
  @Input() studentTimeInput: any;
  @Input() studentHousingInput: any;
  @Input() studentInternationalInput: any;
  @Input() studentHonorsInput: any;
  @Input() studentPhotoInput: any;
  @Input() studentMathGradeInput: any;




  constructor() {

  }

  ngOnInit() {
  }

}
