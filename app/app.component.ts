import { Component } from '@angular/core';
import { RecipeService } from './services/recipe-services';

@Component({
	selector : 'pm-app',
  template : `<nav class="navbar navbar-default">
	              <div class="container-fluid">
								  <a [routerLink]="['/welcome']" class="navbar-brand">{{pageTitle}}</a>
								</div>
							</nav>
							<div class="container">
							  <router-outlet></router-outlet>
							</div>`,
	providers: [ RecipeService ]
	
})

export class AppComponent {
  pageTitle : string = 'My Recipes'	;
}