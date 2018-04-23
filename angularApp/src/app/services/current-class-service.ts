import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentClassInfo } from '../course-assessment-worksheet/currentClassInfo';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentClassInformationService {
  readonly API_URL = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  public getCurrentClassInfo(): Observable<CurrentClassInfo[]> {
    console.log('Made it to the service');
    return this.http.get<CurrentClassInfo[]>("http://localhost:8080/currentClasses");
  };

}
