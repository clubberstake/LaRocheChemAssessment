import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafs1Info } from '../course-assessment-worksheet/cafs1';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CAFS1InformationService {

  constructor(private http: HttpClient) {
  }

  public getCAFS1Info(): Observable<Cafs1Info[]> {
    console.log('Made it to the service');
    return this.http.get<Cafs1Info[]>("http://localhost:8080/cafs1");
  };

}
