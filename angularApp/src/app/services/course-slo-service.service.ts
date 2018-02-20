import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseSLOs } from '../course-assessment-worksheet/courseSLOs';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http/src/base_request_options';

@Injectable()
export class CourseSLOsInformationService {

  constructor(private http: HttpClient) {
  }

  public getCourseSLOsInfo(): Observable<CourseSLOs[]> {
    console.log('Made it to the service');
    return this.http.get<CourseSLOs[]>("http://localhost:8080/courseSLOs");
  };

  public updateSLOs(slos: any) {
    console.log("Update", slos);
    return this.http.put<Response>('http://localhost:8080/slos', slos).subscribe(res => console.log(res));
  }
}
