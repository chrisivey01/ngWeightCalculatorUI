import {Component, OnInit} from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  isLoggedIn = false

  constructor(private loginService: LoginService) {
    this.isLoggedIn = loginService.getIsLoggedIn()
  }

  ngOnInit() {
  }

  checkLogin() {
    console.log("checkLogin called")
    console.log(this.isLoggedIn)
    this.isLoggedIn = this.loginService.getIsLoggedIn()
    console.log(this.isLoggedIn)
  }
}
