import { Component, OnInit, Input } from '@angular/core';
import { CourseInformationObject } from '../course-information-object';

@Component({
  selector: 'app-course-assessment-course-pane',
  templateUrl: './course-assessment-course-pane.component.html',
  styleUrls: ['./course-assessment-course-pane.component.css']
})
export class CourseAssessmentCoursePaneComponent implements OnInit {
  @Input() courseInformationObjInput: CourseInformationObject;

  constructor() { }

  ngOnInit() {
  }

}
