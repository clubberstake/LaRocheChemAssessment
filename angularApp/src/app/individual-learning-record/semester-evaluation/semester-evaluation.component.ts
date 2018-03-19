import { Component, OnInit, Input } from '@angular/core';
import { IndividualLearningRecordObject } from '../individual-learning-record-object';
import { SemesterEvaluationService } from '../../services/semester-evaluation.service';
import { LearningIssues } from '../learningIssues';
import { CourseInformationObject } from '../../course-assessment-worksheet/course-information-object';
import { CurrentClassInfo } from '../../course-assessment-worksheet/currentClassInfo';
import { ClassRosterService } from '../../services/class-roster.service';

@Component({
  selector: 'app-semester-evaluation',
  templateUrl: './semester-evaluation.component.html',
  styleUrls: ['./semester-evaluation.component.css']
})
export class SemesterEvaluationComponent implements OnInit {

  @Input() studentObjectInput: IndividualLearningRecordObject;
  @Input() courseInformationObjectInput: CourseInformationObject;
  courseAndSections: CurrentClassInfo[] = [];
  constructor(private semesterEvaluationService: SemesterEvaluationService, private studentClassRosterService: ClassRosterService) { }

  ngOnInit() {
    
  }

  setCourseIdAndName(courseIdAndName: any) {
    this.courseInformationObjectInput.CurrentClassInfo = this.courseAndSections.find(
      value => value.classId == courseIdAndName
    );
  }

  postMidSemesterReview() {

    this.studentObjectInput.semesterReviewRequest.studentId = this.studentObjectInput.studentId
    this.semesterEvaluationService.putSemesterEvaluation(this.studentObjectInput.semesterReviewRequest)
    console.log(this.studentObjectInput.semesterReviewRequest)
  }

}
