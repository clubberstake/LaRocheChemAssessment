import { Component, OnInit } from '@angular/core';
import { CourseInfoForAssessment } from '../../courseInfoForAssessment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-assessment-course-information',
  templateUrl: './course-assessment-course-information.component.html',
  styleUrls: ['./course-assessment-course-information.component.css']
})
export class CourseAssessmentCourseInformationComponent implements OnInit {
  courseAndSection = {};
  courseAndSections: CourseInfoForAssessment[] = [];

  setcourseAndSection(id: any): void {
    this.courseAndSection = this.courseAndSections.find(
      value => value.id === parseInt(id)
    );
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get("http://localhost:8080/courseInfoForAssessmentWorksheet")
      .subscribe(data => {
        for (let i in data) {
          this.courseAndSections.push(
            new CourseInfoForAssessment(
              Number(i),
              data[i].courseNumAndSection,
              data[i].courseName,
              data[i].instructor,
              data[i].semester
            )
          );
        }
        this.courseAndSection = this.courseAndSections[0];
      });
  }
}

