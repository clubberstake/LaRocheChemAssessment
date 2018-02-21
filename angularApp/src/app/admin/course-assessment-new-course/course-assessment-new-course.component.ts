import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { CourseInformationService } from '../../services/course-information-service.service';
import { InstructorInformationService } from '../../services/instructor-service.service';
import { ClassInformationService } from '../../services/class-service.service';
import { CourseInfoForAssessment } from '../../course-assessment-worksheet/courseInfoForAssessment';
import { InstructorInfo } from '../../course-assessment-worksheet/instructorInfo';
import { ClassInfo } from '../../course-assessment-worksheet/classInfo';

@Component({
  selector: 'app-course-assessment-new-course',
  templateUrl: './course-assessment-new-course.component.html',
  styleUrls: ['./course-assessment-new-course.component.css']
})
export class CourseAssessmentNewCourseComponent implements OnInit {

  courseAndSection = new CourseInfoForAssessment(0, '', '', '', ''); //console log is nasty without this.
  courseAndSections: CourseInfoForAssessment[] = [];
  instructor = new InstructorInfo(0, '');
  instructors: InstructorInfo[] = [];
  other: boolean = false;
  otherInstructor : boolean = false;
  thisYear: number;
  nextYear: number;
  newCourse = new CourseInfoForAssessment(0, '', '', '', '');
  newInstructor = new InstructorInfo(0, '');
  newClass = new ClassInfo(0, '', null, '', '', '', 0, '');
  semester: String;
  year: String;



  setcourseAndSection(courseNumAndSection: any): void {
    this.courseAndSection = this.courseAndSections.find(
      value => value.courseNumAndSection === courseNumAndSection
    );
    console.log(courseNumAndSection);
    console.log(this.courseAndSections);
    console.log(this.courseAndSection);
  }

  setInstructor(instructor: any): void {
    this.instructor = this.instructors.find(
      value => value.name === instructor
    );
    console.log(instructor);
    console.log(this.instructors);
    console.log(this.instructor);
  }

  setSemester(semester: any, year: any): void {
    this.newClass.semester = semester + " " + year;
  }

  constructor(private courseInfoService: CourseInformationService, private instructorService: InstructorInformationService, private classService: ClassInformationService) { }

  ngOnInit() {
    this.courseInfoService.getCourseInfo().subscribe((courses: CourseInfoForAssessment[]) => {
      this.courseAndSections = courses;
      console.log(this.courseAndSections);
      this.courseAndSection = this.courseAndSections[0];
    });
    this.thisYear = new Date().getFullYear();
    this.nextYear = this.thisYear + 1;
    this.instructorService.getInstructorInfo().subscribe((instructors: InstructorInfo[]) => {
      this.instructors = instructors;
      console.log(this.instructors);
      this.instructor = this.instructors[0];
    });
  }

  addClass()
  {
    if(this.other)
    {
      console.log(this.newCourse);
      this.courseInfoService.addCourse(this.newCourse);
      length = this.courseAndSections.length;
      this.courseAndSection = this.courseAndSections[length-1];
      console.log(this.courseAndSections[length - 1]);
      console.log(this.courseAndSection.courseId + 1);
      this.newClass.courseId = this.courseAndSection.courseId + 1;
    }
    else
    {
      this.newClass.courseId = this.courseAndSection.courseId;
    }
    if(this.otherInstructor)
    {
      console.log(this.newInstructor.name);
      this.instructorService.addInstructor(this.newInstructor);
      length = this.instructors.length;
      this.instructor = this.instructors[length-1];
      console.log(this.instructor[length - 1]);
      console.log(this.instructor.id + 1);
      this.newClass.instructorId = this.instructor.id + 1;
    }
    else
    {
      this.newClass.instructorId = this.instructor.id;
      console.log(this.newClass.instructorId);
      console.log(this.instructor.id)
    }
    this.newClass.semester = this.semester + "" + this.year;
    console.log(this.newClass.courseId, this.newClass.section, this.newClass.semester, this.newClass.instructorId);
    this.classService.addClass(this.newClass);
  }

  newCourseDropDown()
  {
    this.other = true;
  }

  oldCourseDropDown()
  {
    if(this.other)
    {
      this.other = false;
    }
  }

  newInstructorDropDown()
  {
    this.otherInstructor = true;
  }

  instructorDropDown()
  {
    if(this.otherInstructor)
    {
      this.otherInstructor = false;
    }
  }

}
