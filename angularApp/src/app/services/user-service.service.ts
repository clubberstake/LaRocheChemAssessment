import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../login/userInfo'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  readonly API_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public getUserInfo(): Observable<UserInfo[]> {
    console.log('Made it to the user service');
    return this.http.get<UserInfo[]>(this.API_URL + '/userInfo');
  };
}
