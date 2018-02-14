import { Component, OnInit, Input } from '@angular/core';
import { StudentInfoForBioAndAdmissionsPlacementTab } from '../studentInfoForBioAndAdmissionsPlacementTab';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from '../../services/student-info-for-bio-and-admissions-placement-tab.service';

@Component({
  selector: 'app-student-pane',
  templateUrl: './student-pane.component.html',
  styleUrls: ['./student-pane.component.css']
})
export class StudentPaneComponent implements OnInit {

  @Input() studentIdInput: any;
  @Input() studentsInput: StudentInfoForBioAndAdmissionsPlacementTab;
  
  majors = ['Chemistry', 'Biochemistry', 'Other'];
  years = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
  semesters = ['Fall', 'Spring', 'Summer'];
  grades = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];


  constructor(private studentService: StudentInfoForBioAndAdmissionsPlacementTabService) {

  }

  ngOnInit() {
  }

  onUpdateStudent() {
    this.studentsInput.id = this.studentIdInput;
    console.log(this.studentsInput);
    this.studentService.updateStudent(this.studentsInput);
  }

}
