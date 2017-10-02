import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService {

  isLoggedIn = false

  constructor(private http: Http) {
  }

  login(login):Observable<Response>{
    return this.http.post("http://localhost:8080/login", login);
  }

  setIsLoggedIn(isLoggedIn){
    this.isLoggedIn = isLoggedIn
  }

  getIsLoggedIn(){
    return this.isLoggedIn = true
  }
}
