import { Injectable } from '@angular/core';
import {RequestOptions, Http, Headers, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
@Injectable()
export class TestService {

  constructor(private http: Http) {

  }
}
