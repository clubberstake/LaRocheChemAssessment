import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ClassRosterResponseObject } from '../individual-learning-record/ClassRosterResponseObject';


@Injectable()
export class ClassRosterService {

  constructor(private http: HttpClient) { }

  public getClassRoster(){
    return this.http.get<ClassRosterResponseObject[]>("http://localhost:8080/studentRoster/getStudentRoster");
  }
}
