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
  courseSLOs = new CourseSLOs(0, '', '', '', '', '', '', '', '');
  courseSLOsList: CourseSLOs[] = [];

  constructor(private courseSLOsService: CourseSLOsInformationService) {}

  ngOnInit() {
    this.courseSLOsService.getCourseSLOsInfo().subscribe((courseSlos: CourseSLOs[]) => {
      this.courseSLOsList = courseSlos;
      console.log(this.courseSLOsList);
      this.courseSLOs = this.courseSLOsList[0];
    });
  }

  knowledgeBaseChecked(value: boolean) {
    this.studentLearningOutcomesInput.CafSLO.knowledgeBaseValue = value;
    console.log(this.studentLearningOutcomesInput);
  }

  labSkillsChecked(value: boolean) {
    this.studentLearningOutcomesInput.CafSLO.labSkillsValue = value;
    console.log(this.studentLearningOutcomesInput);
  }

  practiceChecked(value: boolean) {
    this.studentLearningOutcomesInput.CafSLO.practiceValue = value;
    console.log(this.studentLearningOutcomesInput);
  }

  societalConnectsChecked(value: boolean) {
    this.studentLearningOutcomesInput.CafSLO.societalConnectsValue = value;
    console.log(this.studentLearningOutcomesInput);
  }

  capstoneChecked(value: boolean) {
    this.studentLearningOutcomesInput.CafSLO.capstoneValue = value;
    console.log(this.studentLearningOutcomesInput);
  }
}
