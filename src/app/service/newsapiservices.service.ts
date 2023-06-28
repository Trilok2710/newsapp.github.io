import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {
  currentArticle:any;
  constructor(private _http:HttpClient) {}
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=9b80878979444670b3a45b4be72d16d1";
  techAPIUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9b80878979444670b3a45b4be72d16d1";
  sportsAPIUrl="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=9b80878979444670b3a45b4be72d16d1";
  businessAPIurl="https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9b80878979444670b3a45b4be72d16d1";
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
  //tech component
  techNews():Observable<any>{
    return this._http.get(this.techAPIUrl);
  }
  sportsNews():Observable<any>{
    return this._http.get(this.sportsAPIUrl);
  }
  businessNews():Observable<any>{
    return this._http.get(this.businessAPIurl);
  }
}
