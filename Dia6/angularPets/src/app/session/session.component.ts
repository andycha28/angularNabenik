import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  user: string;
  userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
   }

  ngOnInit() {
  }

  initSession() {
    this.userService.initSession(this.user);
  }

  closeSession() {
    this.userService.clearSession();
  }

}
