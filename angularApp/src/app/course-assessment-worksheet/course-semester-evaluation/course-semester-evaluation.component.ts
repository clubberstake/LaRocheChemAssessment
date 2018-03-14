import { Component, OnInit, Input } from '@angular/core';
import { CourseInformationObject } from '../course-information-object';
import { IndividualLearningRecordObject } from '../../individual-learning-record/individual-learning-record-object';

@Component({
  selector: 'app-course-semester-evaluation',
  templateUrl: './course-semester-evaluation.component.html',
  styleUrls: ['./course-semester-evaluation.component.css']
})
export class CourseSemesterEvaluationComponent implements OnInit {

  @Input() courseInformationObjInput: CourseInformationObject;
  @Input() studentObjectInput: IndividualLearningRecordObject;
  constructor() { }

  ngOnInit() {
  }

}
