import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core/src/metadata/directives";
import { CourseInformationService } from "../../services/course-information-service.service";
import { InstructorInformationService } from "../../services/instructor-service.service";
import { ClassInformationService } from "../../services/class-service.service";
import { UserService } from "../../services/user-service.service";
import { CourseInfoForAssessment } from "../../course-assessment-worksheet/courseInfoForAssessment";
import { InstructorInfo } from "../../course-assessment-worksheet/instructorInfo";
import { ClassInfo } from "../../course-assessment-worksheet/classInfo";
import { when, delay } from "q";
import { FileStorageService } from "../../services/file-storage.service";
import { FileStorage } from "../../services/file-storage";

@Component({
  selector: "app-course-assessment-new-user",
  templateUrl: "./course-assessment-new-user.component.html",
  styleUrls: ["./course-assessment-new-user.component.css"]
})
export class CourseAssessmentNewUserComponent implements OnInit {
  ngOnInit() {}

  username: String;
  password: String;
  
  setUsername(username: any): void {
    this.username = this.username;
    console.log(username);
    console.log(this.username);
  }

  setPassword(password: any): void {
    this.password = this.password;
    console.log(password);
    console.log(this.password);
  }

  constructor(private userService: UserService) {}
}
