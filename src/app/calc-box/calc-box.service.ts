import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {RequestOptions, Http, Headers, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CalcBoxService {
  private calcBoxUrl = 'http://localhost:8080/weightLifting/weightCalc';

  constructor(private http: Http) {
  }

  getWeightCalc(body: string): Observable<Response> {
    return this.http.post(this.calcBoxUrl, body);
  }
}
