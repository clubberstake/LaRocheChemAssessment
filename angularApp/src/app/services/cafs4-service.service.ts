import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cafs4Info } from '../course-assessment-worksheet/cafs4';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CAFS4InformationService {

  constructor(private http: HttpClient) {
  }

  public getCAFS4Info(): Observable<Cafs4Info[]> {
    console.log('Made it to the service');
    return this.http.get<Cafs4Info[]>("http://localhost:8080/cafs4");
  };

}
