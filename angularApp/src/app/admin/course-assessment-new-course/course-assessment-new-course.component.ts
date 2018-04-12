import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core/src/metadata/directives";
import { CourseInformationService } from "../../services/course-information-service.service";
import { InstructorInformationService } from "../../services/instructor-service.service";
import { ClassInformationService } from "../../services/class-service.service";
import { CourseInfoForAssessment } from "../../course-assessment-worksheet/courseInfoForAssessment";
import { InstructorInfo } from "../../course-assessment-worksheet/instructorInfo";
import { Classes } from "../../course-assessment-worksheet/class";
import { when, delay } from "q";
import { FileStorageService } from "../../services/file-storage.service";
import { FileStorage } from "../../services/file-storage";

@Component({
  selector: "app-course-assessment-new-course",
  templateUrl: "./course-assessment-new-course.component.html",
  styleUrls: ["./course-assessment-new-course.component.css"]
})
export class CourseAssessmentNewCourseComponent implements OnInit {
  courseAndSection = new CourseInfoForAssessment(0, "", ""); //console log is nasty without this.
  courseAndSections: CourseInfoForAssessment[] = [];
  instructor = new InstructorInfo(0, "");
  instructors: InstructorInfo[] = [];
  other: boolean = false;
  otherInstructor: boolean = false;
  thisYear: number;
  nextYear: number;
  newCourse = new CourseInfoForAssessment(0, "", "");
  newInstructor = new InstructorInfo(0, "");
  newClass = new Classes(0, "", "", 0);
  semester: String;
  year: String;

  setcourseAndSection(courseNumber: any): void {
    this.courseAndSection = this.courseAndSections.find(
      value => value.courseNumber === courseNumber
    );
    console.log(courseNumber);
    console.log(this.courseAndSections);
    console.log(this.courseAndSection);
  }

  setInstructor(instructor: any): void {
    this.instructor = this.instructors.find(value => value.name === instructor);
    console.log(instructor);
    console.log(this.instructors);
    console.log(this.instructor);
  }

  setSemester(semester: any, year: any): void {
    this.newClass.semester = semester + " " + year;
  }

  constructor(
    private courseInfoService: CourseInformationService,
    private instructorService: InstructorInformationService,
    private classService: ClassInformationService,
    private fileStorageService: FileStorageService
  ) {}

  ngOnInit() {
    this.courseInfoService
      .getCourseInfo()
      .subscribe((courses: CourseInfoForAssessment[]) => {
        this.courseAndSections = courses.sort((a: CourseInfoForAssessment, b: CourseInfoForAssessment) => {
          if (a.courseNumber < b.courseNumber) {
            return -1;
          }
          else if (a.courseNumber > b.courseNumber) {
            return 1;
          }
          else {
            return 0;
          }
        });
        console.log(this.courseAndSections);
        this.courseAndSection = this.courseAndSections[0];
      });
    this.thisYear = new Date().getFullYear();
    this.nextYear = this.thisYear + 1;
    this.instructorService
      .getInstructorInfo()
      .subscribe((instructors: InstructorInfo[]) => {
        this.instructors = instructors;
        console.log(this.instructors);
        this.instructor = this.instructors[0];
      });
  }

  addClass() {
    if (this.other) {
      console.log(this.newCourse);
      this.courseInfoService.addCourse(this.newCourse);
      length = this.courseAndSections.length;
      this.courseAndSection = this.courseAndSections[length - 1];
      console.log(this.courseAndSections[length - 1]);
      console.log(this.courseAndSection.courseId + 1);
      this.newClass.courseId = this.courseAndSection.courseId + 1;
    } else {
      this.newClass.courseId = this.courseAndSection.courseId;
    }
    if (this.otherInstructor) {
      console.log(this.newInstructor.name);
      this.instructorService.addInstructor(this.newInstructor);
      length = this.instructors.length;
      this.instructor = this.instructors[length - 1];
      console.log(this.instructor[length - 1]);
      console.log(this.instructor.id + 1);
      this.newClass.instructorId = this.instructor.id + 1;
    } else {
      this.newClass.instructorId = this.instructor.id;
      console.log(this.newClass.instructorId);
    }
    this.newClass.semester = this.semester + "" + this.year;
    var fileToLoad = (<HTMLInputElement>document.getElementById("syllabusAdmin")).files[0];
    console.log("FILE to Load: ", fileToLoad);
    var fileReader = new FileReader();
    console.log("New class", this.newClass);
    
    var fileStorage = new FileStorage(0, "", "");
    if (fileReader && fileToLoad) {
      fileReader.onload = function() {
        fileStorage.fileContent = fileReader.result.toString();
      };
    }

    fileReader.readAsText(fileToLoad);    

    this.sleep(300).then(() => this.fileStorageService.addFileToStorage(fileStorage));
    this.sleep(4000).then(() => this.classService.addClass(this.newClass));
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

  newCourseDropDown() {
    this.other = true;
  }

  oldCourseDropDown() {
    if (this.other) {
      this.other = false;
    }
  }

  newInstructorDropDown() {
    this.otherInstructor = true;
  }

  instructorDropDown() {
    if (this.otherInstructor) {
      this.otherInstructor = false;
    }
  }
}
