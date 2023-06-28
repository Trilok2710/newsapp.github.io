import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { NewsComponent } from './news/news.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
const routes: Routes = [
  {path:'',component:TopheadlineComponent},//HOME
  {path:'tech',component:TechnewsComponent},
  {path:'sports',component:SportsnewsComponent},
  {path:'news',component:NewsComponent},
  {path:'business',component:BusinessnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
