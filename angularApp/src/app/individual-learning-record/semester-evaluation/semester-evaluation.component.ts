import { Component, OnInit, Input } from '@angular/core';
import { IndividualLearningRecordObject } from '../individual-learning-record-object';
import { SemesterEvaluationService } from '../../services/semester-evaluation.service';

@Component({
  selector: 'app-semester-evaluation',
  templateUrl: './semester-evaluation.component.html',
  styleUrls: ['./semester-evaluation.component.css']
})
export class SemesterEvaluationComponent implements OnInit {

  learningIssues = ["Course Pace", "Poor Background", "Lack of Mindset", "Lack of Interest/Curiosity", "Lack of Effort/Focus", "Poor Time Management", "Health Issues", "Complacence", "Employment Hours", "Other"];
  @Input() studentObjectInput: IndividualLearningRecordObject;

  constructor() { }

  ngOnInit() {
  }

  postMidSemesterReview() {
    // this.midSemesterReviewService.addMidSemesterReview();
  }

}
