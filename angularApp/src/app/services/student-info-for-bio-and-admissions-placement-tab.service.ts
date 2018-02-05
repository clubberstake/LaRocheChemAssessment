import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StudentInfoForBioAndAdmissionsPlacementTab } from '../individual-learning-record/studentInfoForBioAndAdmissionsPlacementTab';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class StudentInfoForBioAndAdmissionsPlacementTabService {

  constructor(private http: HttpClient) { }

  public getStudentInfo(): Observable<StudentInfoForBioAndAdmissionsPlacementTab[]> {
    return this.http.get<StudentInfoForBioAndAdmissionsPlacementTab[]>('http://localhost:8080/student/studentInfoForBioAndAdmissionsPlacementTab')
  }

  public getStudentInfoById(studentId: number): Observable<StudentInfoForBioAndAdmissionsPlacementTab> {
    return this.http.get<StudentInfoForBioAndAdmissionsPlacementTab>('http://localhost:8080/student/studentInfoForBioAndAdmissionsPlacementTab/studentId=' + studentId)
  }

  public getStudentInfoByName(studentName: string): Observable<StudentInfoForBioAndAdmissionsPlacementTab> {
    return this.http.get<StudentInfoForBioAndAdmissionsPlacementTab>('http://localhost:8080/studentInfoForBioAndAdmissionsPlacementTab/studentName=' + studentName)
  }

  public addNewStudent(student: any) {
    return this.http.post<Response>('http://localhost:8080/student/addStudent', student).subscribe(res => console.log(res));
  }
}
