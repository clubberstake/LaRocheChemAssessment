import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StudentInfoForBioAndAdmissionsPlacementTabResponse } from '../individual-learning-record/studentInfoForBioAndAdmissionsPlacementTabResponse';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class StudentInfoForBioAndAdmissionsPlacementTabService {

  constructor(private http: HttpClient) { }

  public getStudentInfo(): Observable<StudentInfoForBioAndAdmissionsPlacementTabResponse[]> {
    return this.http.get<StudentInfoForBioAndAdmissionsPlacementTabResponse[]>('http://localhost:8080/student/studentInfoForBioAndAdmissionsPlacementTab')
  }

  public getStudentInfoById(studentId: number): Observable<StudentInfoForBioAndAdmissionsPlacementTabResponse> {
    return this.http.get<StudentInfoForBioAndAdmissionsPlacementTabResponse>('http://localhost:8080/student/studentInfoForBioAndAdmissionsPlacementTab/studentId=' + studentId)
  }

  public getStudentInfoByName(studentName: string): Observable<StudentInfoForBioAndAdmissionsPlacementTabResponse> {
    return this.http.get<StudentInfoForBioAndAdmissionsPlacementTabResponse>('http://localhost:8080/studentInfoForBioAndAdmissionsPlacementTab/studentName=' + studentName)
  }

  public addNewStudent(student: any) {
    return this.http.post<Response>('http://localhost:8080/student/addStudent', student).subscribe(res => console.log(res));
  }

  public updateStudent(student: any) {
    return this.http.put<Response>('http://localhost:8080/student/updateStudent', student).subscribe(res => console.log(res));
  }
}
