import { Component, OnInit, Input } from "@angular/core";
import { CourseInformationObject } from "../../course-information-object";

@Component({
  selector: "app-course-assessment-course-student-learning-outcomes",
  templateUrl:
    "./course-assessment-course-student-learning-outcomes.component.html",
  styleUrls: [
    "./course-assessment-course-student-learning-outcomes.component.css"
  ]
})
export class CourseAssessmentCourseStudentLearningOutcomesComponent
  implements OnInit {
  @Input() studentLearningOutcomesInput: CourseInformationObject;

  constructor() {}

  ngOnInit() {}

  knowledgeBaseChecked(value: boolean) {
    this.studentLearningOutcomesInput.studentLearningOutcomes.knowledgeBaseValue = value;
    console.log(this.studentLearningOutcomesInput);
  }

  labSkillsChecked(value: boolean) {
    this.studentLearningOutcomesInput.studentLearningOutcomes.labSkillsValue = value;
    console.log(this.studentLearningOutcomesInput);
  }

  practiceChecked(value: boolean) {
    this.studentLearningOutcomesInput.studentLearningOutcomes.practiceValue = value;
    console.log(this.studentLearningOutcomesInput);
  }

  societalConnectsChecked(value: boolean) {
    this.studentLearningOutcomesInput.studentLearningOutcomes.societalConnectsValue = value;
    console.log(this.studentLearningOutcomesInput);
  }

  capstoneChecked(value: boolean) {
    this.studentLearningOutcomesInput.studentLearningOutcomes.capstoneValue = value;
    console.log(this.studentLearningOutcomesInput);
  }
}
