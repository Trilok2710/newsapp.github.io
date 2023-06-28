import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NewsapiservicesService} from '../service/newsapiservices.service';
@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  
constructor(private _services:NewsapiservicesService,private router:Router) { }

  businessnewsDisplay:any[];
  ngOnInit(): void {
    this._services.businessNews().subscribe((result)=>{
    console.log(result);
    this.businessnewsDisplay=result.articles;
  }
  )}
  OnGoToNewsSinglePage(b){
    this._services.currentArticle=b;
    this.router.navigate(['/news']);
  }
}

