import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe-services';

@Component({
  templateUrl: 'app/recipes/entree-recipes.component.html',
	 providers: [{ provide: Window, useValue: window }],
	 styleUrls: ['app/css/courses.css', 'app/css/common.css']
})

export class EntreeComponent {
  recipes: any[];
  recipeType: string = 'entree';
  constructor(private _recipeService: RecipeService, private _window: Window) {
		console.log(this._window);
	}
  
	gototop(): void {
	this._window.scrollTo(0, 0)
	}
}