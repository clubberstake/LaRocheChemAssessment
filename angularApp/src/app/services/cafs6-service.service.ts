import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafs6Info } from '../course-assessment-worksheet/cafs6';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CAFS6InformationService {

  constructor(private http: HttpClient) {
  }

  public getCAFS6Info(): Observable<Cafs6Info[]> {
    console.log('Made it to the service');
    return this.http.get<Cafs6Info[]>("http://localhost:8080/cafs6");
  };

}
