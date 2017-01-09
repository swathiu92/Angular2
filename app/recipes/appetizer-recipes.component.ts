import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe-services';

@Component({
  templateUrl: 'app/recipes/appetizer-recipes.component.html',
	styleUrls: ['app/css/courses.css', 'app/css/common.css']
})

export class AppetizerComponent {
  recipes: any[];
	recipeType = "appetizers";
  constructor(private _recipeService: RecipeService) {}
}


