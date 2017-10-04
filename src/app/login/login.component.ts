import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {CanActivate, Router} from '@angular/router';
import {SideBarComponent} from "../side-bar/side-bar.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements CanActivate, OnInit {

  constructor(public fb: FormBuilder, public loginService: LoginService, private sideBarComponent: SideBarComponent, private router: Router) {

  }

  public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  doLogin() {
    this.loginService.login(
      {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value
      }
    ).subscribe(
      response => {
        this.loginService.setIsLoggedIn(response.ok)
        this.router.navigate([''])
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

  canActivate() {
    if(!this.loginService.getIsLoggedIn()){
      this.router.navigate(['login-route'])
      return false
    }else{
      return true;
    }


  }
}
