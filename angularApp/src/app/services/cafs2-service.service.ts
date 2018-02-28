import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafs2Info } from '../course-assessment-worksheet/cafs2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CAFS2InformationService {

  constructor(private http: HttpClient) {
  }

  public getCAFS2Info(): Observable<Cafs2Info[]> {
    console.log('Made it to the service');
    return this.http.get<Cafs2Info[]>("http://localhost:8080/courseInfoForAssessmentWorksheet2");
  };
  public updateCafs2(cafs2: any) {
    console.log('Made it to the Cafs2 update service', cafs2);
    return this.http.put<Response>("http://localhost:8080/section2", cafs2).subscribe(res => console.log(res));
  };
}
