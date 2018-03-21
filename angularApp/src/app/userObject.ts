import { UserInfo } from "./login/userInfo";

export class userObject {
    loggedIn: Boolean;
    user: UserInfo

  constructor() {
    this.loggedIn = false;
    this.user = new UserInfo(null, "", "", "");
  };
}
