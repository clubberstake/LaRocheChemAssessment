import { Component, OnInit, Input } from '@angular/core';
import { IndividualLearningRecordObject } from '../individual-learning-record-object';
import { SemesterEvaluationService } from '../../services/semester-evaluation.service';
import { LearningIssues } from '../learningIssues';
import { CourseInformationObject } from '../../course-assessment-worksheet/course-information-object';
import { CurrentClassInfo } from '../../course-assessment-worksheet/currentClassInfo';
import { SemesterReviewResponse } from '../SemesterReviewResponse';
import { CourseInformationService } from '../../services/course-information-service.service';
import { CourseInfoForAssessment } from '../../course-assessment-worksheet/courseInfoForAssessment';
import { SemesterReviewRequest } from '../SemesterReviewRequest';

@Component({
  selector: 'app-semester-evaluation',
  templateUrl: './semester-evaluation.component.html',
  styleUrls: ['./semester-evaluation.component.css']
})
export class SemesterEvaluationComponent implements OnInit {

  @Input() studentObjectInput: IndividualLearningRecordObject;
  @Input() courseInformationObjectInput: CourseInformationObject;
  courseAndSection = new CourseInfoForAssessment(0, "", "", "", "");
  courseInfoForAssessment: CourseInfoForAssessment[] = [];
  courseNames: String[] = [];
  constructor(private semesterEvaluationService: SemesterEvaluationService, private courseInfoService: CourseInformationService) { }

  ngOnInit() {
  }

  postMidSemesterReview() {
    this.studentObjectInput.semesterReviewRequest.studentId = this.studentObjectInput.studentId
    this.studentObjectInput.semesterReviewRequest.classId = this.studentObjectInput.semesterReviewResponse.classes.id
    this.semesterEvaluationService.putSemesterEvaluation(this.studentObjectInput.semesterReviewRequest)
    console.log(this.studentObjectInput.semesterReviewRequest)
  }

  setSemesterReviewInfo(courseName: string) {
    console.log("THIS IS THE COURSE NAME THAT WAS SELECTED: " + courseName)
    this.studentObjectInput.courseMap.forEach((value: string, key: number) => {
      if(courseName == value) {
        console.log("The key of " + key + " contains the value " + value)
        this.semesterEvaluationService.getSemesterEvaluationsByCourseId(key).subscribe((semesterReviewsByCourse: SemesterReviewRequest[]) => {
          this.studentObjectInput.semesterReviewRequests = semesterReviewsByCourse;
        });
      }
    });
    this.studentObjectInput.semesterReviewRequest = this.studentObjectInput.semesterReviewRequests[0];
  }

}
