import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mid-semester-evaluation',
  templateUrl: './mid-semester-evaluation.component.html',
  styleUrls: ['./mid-semester-evaluation.component.css']
})
export class MidSemesterEvaluationComponent implements OnInit {

  learningIssues = ["Course Pace", "Poor Background", "Lack of Mindset", "Lack of Interest/Curiosity", "Lack of Effort/Focus", "Poor Time Management", "Health Issues", "Complacence", "Employment Hours", "Other"];


  constructor() { }

  ngOnInit() {
  }

  postMidSemesterReview() {
    console.log("At post mid semester review");
  }

}
