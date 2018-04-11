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
import { UserInfo } from "../../login/userInfo";
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: "app-course-assessment-new-user",
  templateUrl: "./course-assessment-new-user.component.html",
  styleUrls: ["./course-assessment-new-user.component.css"],
  providers: [Md5]
})
export class CourseAssessmentNewUserComponent implements OnInit {
  ngOnInit() {}

  newUser = new UserInfo(0, "", "", "");
  username: string;
  password: string;
  confirmPassword: string;
  usernameFeedback: String = "";
  passwordFeedback: String = "";
  passwordLengthFeedback: String = "";

  addUser() {
    this.userService.addNewUser(this.newUser);
  }

  checkEmail(): void {
    if(!this.username.includes("@"))
    {
      this.usernameFeedback = "That is not a valid email address!";
    }
    else 
    {
      this.usernameFeedback = ""; 
      this.newUser.username = this.username;
    }
  }

  checkPasswordLength(): void {
    if(this.password.length < 6)
    {
      this.passwordLengthFeedback = "The password must be at least 6 characters long!";
    }
    else 
    {
      this.passwordLengthFeedback = ""; 
    }
  }

  checkPassword(): void {
    if(this.password != this.confirmPassword)
    {
      this.passwordFeedback = "The password does not match!";
    }
    else
    {
      this.passwordFeedback = "";
      var hashedpassword = String(Md5.hashStr(this.password));
      this.newUser.password = hashedpassword;
    }
  }

  constructor(private userService: UserService) {}
}
