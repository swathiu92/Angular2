import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe-services';

@Component({
  templateUrl: 'app/recipes-home/recipe-list.component.html',
  styleUrls: ['app/css/common.css']
})

export class RecipeListComponent implements OnInit {
  recipeCount: any[];
	countTitles: any{};
	constructor(private _recipeService: RecipeService) {}
	setCountData(data): void {
		this.recipeCount = data;
		this.countTitles.appetizers = data.appetizers.vegetarian + ' veg appetizers ' + data.appetizers.vegetarian + ' non veg appetizers';
    this.countTitles.entrees = data.entrees.vegetarian + ' veg entrees ' + data.entrees.vegetarian + ' non veg entrees';
    this.countTitles.desserts = data.desserts.vegetarian + ' veg desserts ' + data.desserts.vegetarian + ' non veg desserts';
	}
	ngOnInit(): void {
				 this._recipeService.getRecipesCount()
		    .subscribe(data => this.setCountData(data));
	}
}