import { Component, OnInit, Input } from '@angular/core';
import { StudentInfoForBioAndAdmissionsPlacementTabResponse } from '../studentInfoForBioAndAdmissionsPlacementTabResponse';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from '../../services/student-info-for-bio-and-admissions-placement-tab.service';
import { IndividualLearningRecordObject } from '../individual-learning-record-object';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-student-pane',
  templateUrl: './student-pane.component.html',
  styleUrls: ['./student-pane.component.css']
})
export class StudentPaneComponent implements OnInit {

  selectedPhoto: File = null;

  @Input() studentObjectInput: IndividualLearningRecordObject;

  majors = ['Chemistry', 'Biochemistry', 'Other'];
  years = ['Sophomore','Junior','Senior'];
  semesters = ['Fall', 'Spring', 'Summer'];
  grades = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];

  constructor(private studentService: StudentInfoForBioAndAdmissionsPlacementTabService) {}

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedPhoto = <File>event.target.files[0]
    console.log(event);
  }

  onUpdateStudent() {
    this.studentObjectInput.student.id = this.studentObjectInput.studentId;
    console.log(this.studentObjectInput);
    this.studentService.updateStudent(this.studentObjectInput.student);

    const fd = new FormData();
    fd.append('image', this.selectedPhoto, this.selectedPhoto.name);
    //this.studentService.updateStudentPhoto(this.selectedPhoto)
  }
}
