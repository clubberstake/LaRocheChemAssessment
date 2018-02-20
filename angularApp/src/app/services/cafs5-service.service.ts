import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafs5Info } from '../course-assessment-worksheet/cafs5';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CAFS5InformationService {

  constructor(private http: HttpClient) {
  }

  public getCAFS5Info(): Observable<Cafs5Info[]> {
    console.log('Made it to the service');
    return this.http.get<Cafs5Info[]>("http://localhost:8080/cafs5");
  };

}
