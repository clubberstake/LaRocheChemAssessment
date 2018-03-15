import { Component, OnInit, Input } from '@angular/core';
import { IndividualLearningRecordObject } from '../individual-learning-record-object';
import { SemesterEvaluationService } from '../../services/semester-evaluation.service';
import { LearningIssues } from '../learningIssues';

@Component({
  selector: 'app-semester-evaluation',
  templateUrl: './semester-evaluation.component.html',
  styleUrls: ['./semester-evaluation.component.css']
})
export class SemesterEvaluationComponent implements OnInit {

  @Input() studentObjectInput: IndividualLearningRecordObject;
  constructor(private semesterEvaluationService: SemesterEvaluationService) { }

  ngOnInit() {
  }

  postMidSemesterReview() {
    this.studentObjectInput.semesterReviewRequest.studentId = this.studentObjectInput.studentId
    console.log("The semester review studend ID: " + this.studentObjectInput.semesterReviewRequest.studentId)
    this.semesterEvaluationService.addSemesterEvaluation(this.studentObjectInput.semesterReviewRequest)
  }

}
