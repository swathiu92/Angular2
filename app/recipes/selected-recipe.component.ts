import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe-services';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
	templateUrl: 'app/recipes/selected-recipe.component.html',
	styleUrls: ['app/css/courses.css', 'app/css/common.css']
})

export class SelectedRecipeComponent implements OnInit{
	selectedRecipe: any[];
	recipeType: string;
	constructor(private _route: ActivatedRoute, private _router: Router, private _recipeService: RecipeService) {}
	
	goBack(): void {
		this._router.navigate(['/'+this._route.snapshot.params['recipeType']])
	}
	
	ngOnInit() : void {
		this.recipeType = this._route.snapshot.params['recipeType'];
		let recipeName = this._route.snapshot.params['recipeName'];
		this._recipeService.getSelectedRecipe(this.recipeType, recipeName)
		    .subscribe(data => this.selectedRecipe = data);
	}
}