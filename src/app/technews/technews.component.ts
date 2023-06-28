import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NewsapiservicesService} from '../service/newsapiservices.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService,private router:Router) { }

  technewsDisplay:any[];
  ngOnInit(): void {
    this._services.techNews().subscribe((result)=>{
    console.log(result);
    this.technewsDisplay=result.articles;
  }
  )
  }
  OnGoToNewsSinglePage(s){
    this._services.currentArticle=s;
    this.router.navigate(['/news']);
  }
}

