import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CourseInfoForAssessment } from "./courseInfoForAssessment";
import { CourseInformationObject } from "./course-information-object";
import { ClassInfo } from "./classInfo";
import { CourseSLOsInformationService } from "../services/course-slo-service.service"

@Component({
  selector: "app-course-assessment-worksheet",
  templateUrl: "./course-assessment-worksheet.component.html",
  styleUrls: ["./course-assessment-worksheet.component.css"]
})
export class CourseAssessmentWorksheetComponent implements OnInit {
  courseInformationObj: CourseInformationObject;

  constructor(public sloService: CourseSLOsInformationService) {
    this.courseInformationObj = new CourseInformationObject();
  }

  ngOnInit(): void {    }

  onSave() {
    this.sloService.updateSLOs(this.courseInformationObj.CourseSLOs);
  }
}
