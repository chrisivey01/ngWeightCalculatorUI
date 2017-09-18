import { Injectable } from '@angular/core';
import {RequestOptions, Http, Headers, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
@Injectable()
export class TestService {

  constructor(private http: Http) {

  }

  testService():Observable<Response>{
    return this.http.post("http://localhost:8080/weightLifting/test", "test");
  }
}
