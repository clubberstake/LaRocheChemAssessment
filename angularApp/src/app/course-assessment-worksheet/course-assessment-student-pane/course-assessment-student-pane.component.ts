import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-assessment-student-pane',
  templateUrl: './course-assessment-student-pane.component.html',
  styleUrls: ['./course-assessment-student-pane.component.css']
})
export class CourseAssessmentStudentPaneComponent implements OnInit {

  displayDate: any
  constructor() { }

  ngOnInit() {
    this.displayDate = new Date().toLocaleDateString();
  }

}
