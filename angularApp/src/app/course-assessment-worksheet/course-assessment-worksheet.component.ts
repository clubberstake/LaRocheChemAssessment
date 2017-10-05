import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseInfoForAssessment } from './courseInfoForAssessment';

@Component({
  selector: 'app-course-assessment-worksheet',
  templateUrl: './course-assessment-worksheet.component.html',
  styleUrls: ['./course-assessment-worksheet.component.css']
})
export class CourseAssessmentWorksheetComponent implements OnInit {

  courseAndSection = {};

  courseAndSections: CourseInfoForAssessment[] = [];

  setcourseAndSection(id: any): void {
    this.courseAndSection = this.courseAndSections.find(value => value.id === parseInt(id));
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/courseInfoForAssessmentWorksheet').subscribe(data => {
      for (let i in data) {
        this.courseAndSections.push(new CourseInfoForAssessment(Number(i), data[i].courseNumAndSection, data[i].courseName, data[i].instructor, data[i].semester));
      }
      this.courseAndSection = this.courseAndSections[0];
    });
  }

}
