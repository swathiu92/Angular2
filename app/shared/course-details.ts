import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import { RecipeService } from '../services/recipe-services';

@Component({
    selector: "course-details",
    templateUrl: 'app/shared/course-details.html',
    styleUrls: ['app/css/courses.css', 'app/css/common.css'],
		inputs: ['recipe:recipeType']
})

export class CourseDetails {
	 recipes: any[];
	 constructor(private _recipeService: RecipeService) {}
	 ngOnInit(): void {
     this._recipeService.getRecipes(this.recipe)
         .subscribe(data => this.recipes = data);
  }
}