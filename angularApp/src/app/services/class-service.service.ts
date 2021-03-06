import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassInfo } from '../course-assessment-worksheet/classInfo';
import { Observable } from 'rxjs/Observable';
import { Classes } from '../course-assessment-worksheet/class';

@Injectable()
export class ClassInformationService {
  readonly API_URL = "http://localhost:8080";
  constructor(private http: HttpClient) {
  }

  public getClassInfo(): Observable<ClassInfo[]> {
    console.log('Made it to the new class service');
    return this.http.get<ClassInfo[]>("http://localhost:8080/classInfo");
  };

  public addClassWithSyllabus(classs: any) {
    return this.http.post<Response>('http://localhost:8080/addClassWithSyllabus', classs).subscribe(res => console.log(res));
  }

  public addClassWithoutSyllabus(classs: any) {
    return this.http.post<Response>('http://localhost:8080/addClassWithoutSyllabus', classs).subscribe(res => console.log(res));
  }

  public saveSyllabus(syllabus: any) {
    return this.http.post<Response>('http://localhost:8080/saveSyllabus', syllabus).subscribe(res => console.log(res));
  }

}
