import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseInfoForAssessment } from '../course-assessment-worksheet/courseInfoForAssessment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CourseInformationService {
  readonly API_URL = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  public getCourseInfo(): Observable<CourseInfoForAssessment[]> {
    console.log('Made it to the service');
    return this.http.get<CourseInfoForAssessment[]>("http://localhost:8080/courseInfoForAssessmentWorksheet");
  };
  public addCourse(course: any) {
       return this.http.post<Response>('http://localhost:8080/addCourse', course).subscribe(res => console.log(res));
     }
}
