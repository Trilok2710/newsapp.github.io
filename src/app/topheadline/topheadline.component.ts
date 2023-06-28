import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private _services:NewsapiservicesService,private router:Router) { }

  topheadingDisplay:any[];
  ngOnInit(): void {
    this._services.topHeading().subscribe((result)=>{
    console.log(result);
    this.topheadingDisplay=result.articles;
  }
  )
  }
  OnGoToNewsSinglePage(d){
    this._services.currentArticle=d;
    this.router.navigate(['/news']);
  }
}
