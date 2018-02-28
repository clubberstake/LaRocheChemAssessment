import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafs3Info } from '../course-assessment-worksheet/cafs3';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CAFS3InformationService {

  constructor(private http: HttpClient) {
  }

  public getCAFS3Info(): Observable<Cafs3Info[]> {
    console.log('Made it to the service');
    return this.http.get<Cafs3Info[]>("http://localhost:8080/courseInfoForAssessmentWorksheet3");
  };
  public updateCafs3(cafs3: any) {
    console.log('Made it to the Cafs3 update service', cafs3);
    return this.http.put<Response>("http://localhost:8080/section3", cafs3).subscribe(res => console.log(res));
  };
}