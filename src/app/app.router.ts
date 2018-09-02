import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Header } from './common/header.component';//头部
import { Footer } from './common/footer.component';//尾部
import { Main } from './main/main.component';//主页
import { News } from './main/news.component';//资讯
import { Newsdetail } from './main/newsdetail.component';//资讯详情
import { Team } from './main/team.component';//团队
import { Teamdetail } from './main/teamdetail.component';//团队详情
import { Design } from './main/design.component';//设计
import { Designdetail } from './main/designdetail.component';//设计详情
import { Youshi } from './main/youshi.component';//优势
import { About } from './main/about.component';//关于
import { Case } from './main/case.component';//案例
import { Casedetail } from './main/casedetail.component';//案例详情
import { Concat } from './main/concat.component';//联系

const routes: Routes = [
  {path: '', component: Main},
  {path: 'main', component: Main},
  {path: 'news', component: News},
  {path: 'newsdetail', component: Newsdetail},
  {path: 'team', component: Team},
  {path: 'teamdetail', component: Teamdetail},
  {path: 'design', component: Design},
  {path: 'designdetail', component: Designdetail},
  {path: 'youshi', component: Youshi},
  {path: 'about', component: About},
  {path: 'case', component: Case},
  {path: 'casedetail', component: Casedetail},
  {path: 'concat', component: Concat}
]

@NgModule({
    //forChild -> forRoot
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

