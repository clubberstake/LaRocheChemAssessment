import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StudentInfoForBioAndAdmissionsPlacementTab } from '../individual-learning-record/studentInfoForBioAndAdmissionsPlacementTab';

@Injectable()
export class StudentInfoForBioAndAdmissionsPlacementTabService {

  constructor(private http: HttpClient) { }

  public getStudentInfo(): Observable<StudentInfoForBioAndAdmissionsPlacementTab[]>{
    return this.http.get<StudentInfoForBioAndAdmissionsPlacementTab[]>('http://localhost:8080/studentInfoForBioAndAdmissionsPlacementTab')
  }
}
