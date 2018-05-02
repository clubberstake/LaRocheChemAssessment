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

  public addNewUser(user: any) {
    return this.http.post<Response>('http://localhost:8080/addUser', user).subscribe(res => console.log(res));
  }

  public getUserInfoByUsername(username: String): Observable<UserInfo[]> {
    console.log(username);
    return this.http.get<UserInfo[]>(this.API_URL + "/userInfo/username=" + username);
  }

  public updateUser(user: any) {
    console.log("Made it to the User update service", user);
    return this.http
      .put<Response>("http://localhost:8080/updateUser", user)
      .subscribe(res => console.log(res));

  }
}
