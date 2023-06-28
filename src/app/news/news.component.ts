import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  d;
  constructor(private _services:NewsapiservicesService) { }

  ngOnInit(): void {
    console.log(this._services.currentArticle);
    this.d=this._services.currentArticle;
  }

}
