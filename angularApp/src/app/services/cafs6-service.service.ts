import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafs6Info } from '../course-assessment-worksheet/cafs6';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CAFS6InformationService {

  constructor(private http: HttpClient) {
  }

  public getCourseInfoForAssessmentWorksheetReview(): Observable<Cafs6Info[]> {
    console.log('Made it to the service');
    return this.http.get<Cafs6Info[]>("http://localhost:8080/courseInfoForAssessmentWorksheetReview");
  };
  public updateCafs6(cafs6: any) {
    console.log('Made it to the Cafs6 update service', cafs6);
    return this.http.put<Response>("http://localhost:8080/section6", cafs6).subscribe(res => console.log(res));
  };
}
