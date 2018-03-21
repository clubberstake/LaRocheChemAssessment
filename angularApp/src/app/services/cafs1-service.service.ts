import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cafs1Info } from "../course-assessment-worksheet/cafs1";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CAFS1InformationService {
  readonly API_URL = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  public getCAFS1Info(): Observable<Cafs1Info[]> {
    console.log('Made it to the service');
    return this.http.get<Cafs1Info[]>(this.API_URL + '/cafs1');
  };
  public updateCafs1(cafs1: any) {
    console.log("Made it to the Cafs1 update service", cafs1);
    return this.http
      .put<Response>("http://localhost:8080/section1", cafs1)
      .subscribe(res => console.log(res));
  }
}
