import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.html'
})
export class Header implements OnInit{
	 constructor(private myRouter: Router) { };
	 ngOnInit() { };
	tablist=["首页","设计","优势","案例","团队","关于","资讯","联系"];
	tabi=0;
	tab(index){
		this.tabi=index;
		switch(index)
			{
			case 0:
			  this.myRouter.navigateByUrl('/main');
			  break;
			case 1:
			 this.myRouter.navigateByUrl('/design');
			  break;
			case 2:
			 this.myRouter.navigateByUrl('/youshi');
			  break;
			case 3:
			 this.myRouter.navigateByUrl('/case');
			  break;
			case 4:
			 this.myRouter.navigateByUrl('/team');
			  break;
			case 5:
			 this.myRouter.navigateByUrl('/about');
			  break;
			case 6:
			 this.myRouter.navigateByUrl('/news');
			  break;
			case 7:
			 this.myRouter.navigateByUrl('/concat');
			  break;			  			  
	}
}
}

