import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// 引入路由模块
import {AppRoutingModule} from './app.router';
import { AppComponent } from './app.component';
import { Header } from './common/header.component';
import { Footer } from './common/footer.component';
import { Main } from './main/main.component';
import { News } from './main/news.component';
import { Newsdetail } from './main/newsdetail.component';
import { Team } from './main/team.component';
import { Teamdetail } from './main/teamdetail.component';
import { Design } from './main/design.component';
import { Designdetail } from './main/designdetail.component';
import { Youshi } from './main/youshi.component';
import { About } from './main/about.component';
import { Case } from './main/case.component';
import { Casedetail } from './main/casedetail.component';
import { Concat } from './main/concat.component';
@NgModule({
  declarations: [
    AppComponent,
    Footer,
    Header,
    Main,
    News,
    Newsdetail,
    Team,
    Teamdetail,
    Design,
    Designdetail,
    Youshi,
    About,
    Case,
    Casedetail,
    Concat
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
