import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InstructorInfo } from '../course-assessment-worksheet/instructorInfo';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InstructorInformationService {
  readonly API_URL = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  public getInstructorInfo(): Observable<InstructorInfo[]> {
    console.log('Made it to the instructor service');
    return this.http.get<InstructorInfo[]>("http://localhost:8080/instructors");
  };

  public addInstructor(instructor: any) {
    return this.http.post<Response>('http://localhost:8080/addInstructor', instructor).subscribe(res => console.log(res));
  }

}
