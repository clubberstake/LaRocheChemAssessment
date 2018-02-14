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
    return this.http.get<Cafs2Info[]>("http://localhost:8080/cafs2");
  };

}
