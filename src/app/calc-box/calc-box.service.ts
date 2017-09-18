import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {RequestOptions, Http, Headers, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CalcBoxService {
  private calcBoxUrl = 'http://localhost:8080/weightLifting/weightCalc';

  constructor(private http: Http) {
  }

  getWeightCalc(body: string): Observable<string> {
    console.log("in calc box service");

    let searchParams = new URLSearchParams();
    searchParams.set("weight", body);
    let headers = new Headers({'Content-Type': 'application/json', params: searchParams});
    let options = new RequestOptions({headers: headers});

    let serverResponse = this.http.post(this.calcBoxUrl, options);

    console.log(serverResponse);

    return serverResponse
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}


// articleUrl = "http://localhost:8080/user/article";
// createArticle(article: Article):Observable<number> {
//   let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
// let options = new RequestOptions({ headers: cpHeaders });
// return this.http.post(this.articleUrl, article, options)
//   .map(success => success.status)
//   .catch(this.handleError);
// }
