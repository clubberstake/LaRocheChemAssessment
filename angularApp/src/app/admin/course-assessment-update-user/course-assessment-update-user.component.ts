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
  selector: "app-course-assessment-update-user",
  templateUrl: "./course-assessment-update-user.component.html",
  styleUrls: ["./course-assessment-update-user.component.css"],
  providers: [Md5]
})
export class CourseAssessmentUpdateUserComponent implements OnInit {
  ngOnInit() {}

  //@Input() UserInfoSearch: UserInfo;

  editUser = new UserInfo(0, "", "", "");
  updateUsername: string;
  updatePassword: string;
  updateConfirmPassword: string;
  usernameFeedback: String = "";
  passwordFeedback: String = "";
  passwordLengthFeedback: String = "";

   
  findUser()
  {
    this.userService
      .getUserInfoByUsername(this.updateUsername)
      .subscribe((users: UserInfo[]) => {
        this.editUser = users[0];
        console.log(this.editUser);
      });
  }

  updateUser() {
    console.log(this.editUser);
    this.userService.updateUser(this.editUser);
  }

  checkEmail(): void {
    if(!this.updateUsername.includes("@"))
    {
      this.usernameFeedback = "That is not a valid email address!";
    }
    else 
    {
      this.usernameFeedback = ""; 
      this.editUser.username = this.updateUsername;
    }
  }

  checkPasswordLength(): void {
    if(this.updatePassword.length < 6)
    {
      this.passwordLengthFeedback = "The password must be at least 6 characters long!";
    }
    else 
    {
      this.passwordLengthFeedback = ""; 
    }
  }

  checkPassword(): void {
    if(this.updatePassword != this.updateConfirmPassword)
    {
      this.passwordFeedback = "The password does not match!";
    }
    else
    {
      this.passwordFeedback = "";
      var hashedpassword = String(Md5.hashStr(this.updatePassword));
      this.editUser.password = hashedpassword;
    }
  }

  constructor(private userService: UserService) {}
}
