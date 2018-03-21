import { Component, Input, OnInit } from '@angular/core';
import { userObject } from '../userObject';
import { UserService } from '../services/user-service.service'
import { UserInfo } from '../login/userInfo'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() userObject: userObject;
  username: String = "";
  emailFeedback: String = "";
  password: String = "";
  users: UserInfo[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserInfo().subscribe((users: UserInfo[]) => {
      this.users = users;
    });
  }

  logIn() {
    this.userObject.user = this.users.find(
      value => value.username == this.username
    );
    if(this.userObject.user == undefined)
    {
      this.emailFeedback = "This username or password is invalid";
    }
    else
    {
      if(this.userObject.user.username == this.username && this.userObject.user.password == this.password)
      {
        this.userObject.loggedIn = true;
      }
      else 
      {
        this.emailFeedback = "This username or password is invalid";
      }
    }
  }
}
