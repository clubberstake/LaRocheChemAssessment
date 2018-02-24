import { Component, OnInit, Input } from '@angular/core';
import { IndividualLearningRecordObject } from '../individual-learning-record-object';
import { MidSemesterEvaluationService } from '../../services/mid-semester-evaluation.service';

@Component({
  selector: 'app-mid-semester-evaluation',
  templateUrl: './mid-semester-evaluation.component.html',
  styleUrls: ['./mid-semester-evaluation.component.css']
})
export class MidSemesterEvaluationComponent implements OnInit {

  learningIssues = ["Course Pace", "Poor Background", "Lack of Mindset", "Lack of Interest/Curiosity", "Lack of Effort/Focus", "Poor Time Management", "Health Issues", "Complacence", "Employment Hours", "Other"];
  @Input() studentObjectInput: IndividualLearningRecordObject;

  // constructor(private midSemesterReviewService: MidSemesterEvaluationService) { }
  constructor() {}

  ngOnInit() {
  }

  postMidSemesterReview() {
    // this.midSemesterReviewService.addMidSemesterReview();
  }

}
