import { Component, OnInit, Input } from "@angular/core";
import { CourseInformationObject } from "../../course-information-object";
import { CourseSLOs } from "../../courseSLOs"
import { CourseSLOsInformationService } from "../../../services/course-slo-service.service"

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
  courseSLOs = new CourseSLOs(null, 0, false, false, false, false, false);
  courseSLOsList: CourseSLOs[] = [];

  constructor(private courseSLOsService: CourseSLOsInformationService) {}

  ngOnInit() {
  }

  knowledgeBaseChecked(value: boolean) {
    this.studentLearningOutcomesInput.CourseSLOs.slo1 = value;
    console.log(this.studentLearningOutcomesInput);
  }

  labSkillsChecked(value: boolean) {
    this.studentLearningOutcomesInput.CourseSLOs.slo2 = value;
    console.log(this.studentLearningOutcomesInput);
  }

  practiceChecked(value: boolean) {
    this.studentLearningOutcomesInput.CourseSLOs.slo3 = value;
    console.log(this.studentLearningOutcomesInput);
  }

  societalConnectsChecked(value: boolean) {
    this.studentLearningOutcomesInput.CourseSLOs.slo4 = value;
    console.log(this.studentLearningOutcomesInput);
  }

  capstoneChecked(value: boolean) {
    this.studentLearningOutcomesInput.CourseSLOs.slo5 = value;
    console.log(this.studentLearningOutcomesInput);
  }
}
