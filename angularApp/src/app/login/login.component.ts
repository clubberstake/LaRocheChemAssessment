import { Component, Input, OnInit } from '@angular/core';
import { userObject } from '../userObject';
import { UserService } from '../services/user-service.service'
import { UserInfo } from '../login/userInfo'
import { Md5 } from 'ts-md5/dist/md5'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Md5]
})
export class LoginComponent implements OnInit {
  @Input() userObject: userObject;
<<<<<<< HEAD
  username: String = "bill.gates@laroche.edu";
  emailFeedback: String = "1@1.com";
  password: String = "macdaddy";
=======
  username: String = "";
  emailFeedback: String = "";
  password: string = "";
>>>>>>> fc623a71c0e9c100d86b53b1cc282529aa5aef15
  users: UserInfo[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserInfo().subscribe((users: UserInfo[]) => {
      this.users = users;
    });  
  }

  logIn() {
    var hashedpassword = Md5.hashStr(this.password);
    this.userObject.user = this.users.find(
      value => value.username == this.username
    );
    if(this.userObject.user == undefined)
    {
      this.emailFeedback = "This username or password is invalid";
    }
    else
    {
      if(this.userObject.user.username == this.username && this.userObject.user.password == hashedpassword)
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
