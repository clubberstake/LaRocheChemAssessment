import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafs3Info } from '../course-assessment-worksheet/cafs3';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CAF3DisplayService {

  constructor(private http: HttpClient) {
  }

  public getCourseInfo(): Observable<Cafs3Info[]> {
    console.log('Made it to the service');
    return this.http.get<Cafs3Info[]>("http://localhost:8080/CAF3DisplayWorksheet");
  };

}