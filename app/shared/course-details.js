"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const recipe_services_1 = require('../services/recipe-services');
let CourseDetails = class CourseDetails {
    constructor(_recipeService) {
        this._recipeService = _recipeService;
    }
    ngOnInit() {
        this._recipeService.getRecipes(this.recipe)
            .subscribe(data => this.recipes = data);
    }
};
CourseDetails = __decorate([
    core_1.Component({
        selector: "course-details",
        templateUrl: 'app/shared/course-details.html',
        styleUrls: ['app/css/courses.css', 'app/css/common.css'],
        inputs: ['recipe:recipeType']
    }), 
    __metadata('design:paramtypes', [recipe_services_1.RecipeService])
], CourseDetails);
exports.CourseDetails = CourseDetails;
//# sourceMappingURL=course-details.js.map