import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe-services';

@Component({
  templateUrl: 'app/recipes/dessert-recipes.component.html',
	styleUrls: ['app/css/courses.css', 'app/css/common.css']
})

export class DessertComponent {
  recipes: any[];
  recipeType: string = 'desserts';
  constructor(private _recipeService: RecipeService) {}
}